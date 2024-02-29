import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { PrismaModule } from '../../db/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      storage: diskStorage({
        destination: function (req, file, callback) {
          if (file.mimetype.includes('image')) callback(null, 'public/image/');
          if (file.mimetype.includes('epub')) callback(null, 'public/epub/');
        },
        filename(
          req,
          file: Express.Multer.File,
          cb: (error: Error | null, filename: string) => void,
        ) {
          console.log('file name', file);
          cb(null, `${Date.now()}${path.extname(file.originalname)}`);
        },
      }),
    }),
  ],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
