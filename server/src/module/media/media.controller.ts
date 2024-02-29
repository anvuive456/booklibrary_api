import {
  Controller,
  Request,
  Post,
  UploadedFile,
  UseInterceptors,
  Get,
  StreamableFile,
  Param,
  Header,
  NotFoundException,
  Delete,
  HttpStatus,
  BadRequestException,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipeBuilder,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { encode } from 'blurhash';
import { join } from 'path';
import sharp from 'sharp';
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger';
import { createReadStream } from 'fs';
import { Media } from '@prisma/client';
import { DeleteMediaDto } from './media.dto';
import * as fs from 'fs';
import { Cron } from '@nestjs/schedule';
import { EPub } from 'epub2';

@ApiTags('Media')
@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @Post('image')
  async upload(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'image/*',
        })
        .addMaxSizeValidator({
          maxSize: 300000,
          message: 'File không được quá 3mb',
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Request() req,
  ) {
    console.log('req file', req.body.file == undefined);
    console.log('file', file.filename);

    const receivedFile = req.body.file || file;

    const image = await sharp(receivedFile.path).raw().ensureAlpha();

    const metadata = await image.metadata();
    console.log(metadata);
    const blurhash = encode(
      new Uint8ClampedArray(await image.toBuffer().then((value) => value)),
      metadata.width || 0,
      metadata.height || 0,
      4,
      4,
    );
    const thumbnail = await this.generateThumbnail(receivedFile.path);

    return this.mediaService.createMedia({
      blurhash,
      imageH: metadata.height || 0,
      imageW: metadata.width || 0,
      image: receivedFile.path,
      thumbnail: thumbnail,
      metadata: metadata,
    });
  }

  @UseInterceptors(FileInterceptor('epub'))
  @Post('epub')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        epub: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadEbook(@UploadedFile() file: Express.Multer.File, @Request() req) {
    const epub = new EPub(file.destination);
    console.log(epub.metadata);
  }

  async encodeImageToBlurhash(path: string) {
    new Promise((resolve, reject) => {
      sharp(path)
        .raw()
        .ensureAlpha()
        .resize(32, 32, { fit: 'inside' })
        .toBuffer((err, buffer, { width, height }) => {
          if (err) return reject(err);
          resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
        });
    });
  }

  async generateThumbnail(imagePath: string): Promise<string> {
    const [path, ext] = imagePath.split('.');
    const thumbnailPath = path + '_thumb.' + ext;

    await sharp(imagePath).resize(200, 200).toFile(thumbnailPath);

    return thumbnailPath;
  }

  @Get('')
  async getAllFiles() {
    return await this.mediaService.getAllFiles();
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
  })
  async deleteFile(@Param() dto: DeleteMediaDto) {
    const media = await this.mediaService.deleteMedia(dto.id);
    fs.unlink(media.image, (err) => {
      if (err) throw new BadRequestException(err);
    });

    fs.unlink(media.thumbnail, (err) => {
      if (err) throw new BadRequestException(err);
    });
    return {
      data: media,
    };
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  @Header('Content-Disposition', 'attachment; filename="image.*"')
  async getMedia(@Param('id') id: string): Promise<Media> {
    const media = await this.mediaService.getMedia(id);
    if (!media) throw new NotFoundException('Không tìm thấy ảnh');
    return media;
  }

  @Get(':id/image')
  @Header('Content-Type', 'application/json')
  @Header('Content-Disposition', 'attachment; filename="image.*"')
  async getImage(@Param('id') id: string): Promise<StreamableFile> {
    const media = await this.mediaService.getMedia(id);
    const file = createReadStream(join(process.cwd(), media!.image));
    return new StreamableFile(file);
  }

  @Cron('10 * * * * *', {
    name: 'delete unused files',
  })
  async autoRemoveUnusedFiles() {
    const files = await this.mediaService.getUnusedFiles();
    if (files.length == 0) {
      console.log('no unused files');
      return;
    }
    for await (const file of files) {
      console.log('delete', file.id);
      await this.deleteFile({ id: file.id });
    }
  }
}
