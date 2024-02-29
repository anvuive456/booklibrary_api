import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { Media } from '../../@generated/media/media.model';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async getMediaByBookId(id: string): Promise<Media | null> {
    const media = await this.prisma.media.findFirst({
      where: {
        book: {
          id,
        },
      },
    });

    return media;
  }
}
