import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import { PrismaService } from '../../db/prisma.service';
import { CreateMediaDto } from './media.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async createMedia(dto: CreateMediaDto) {
    const data: Prisma.MediaCreateInput = dto;
    return this.prisma.media.create({
      data,
    });
  }

  async getMedia(id: string) {
    return this.prisma.media.findUnique({ where: { id } });
  }

  async getAllFiles() {
    const [data, count] = await this.prisma.$transaction([
      this.prisma.media.findMany(),
      this.prisma.media.count(),
    ]);

    return {
      data,
      count,
    };
  }

  async deleteMedia(id: string) {
    return this.prisma.media.delete({ where: { id } });
  }

  async getUnusedFiles() {
    return this.prisma.media.findMany({
      where: {
        AND: [
          {
            book: {
              is: null,
            },
          },
          {
            profile: {
              is: null,
            },
          },
        ],
      },
    });
  }
}

@Injectable()
class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: './public',
    };
  }
}
