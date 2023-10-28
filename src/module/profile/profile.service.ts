import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { UpdateOrInsertProfileDto } from './profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getMyProfile(userId: string) {
    return this.prisma.profile.findUnique({
      where: {
        userId,
      },
      include: {
        media: true,
        user: false,
      },
    });
  }

  async updateProfile(userId: string, dto: UpdateOrInsertProfileDto) {
    return this.prisma.profile.upsert({
      where: {
        userId,
      },
      create: {
        userId,
        email: dto.email || '',
        firstName: dto.firstName || '',
        lastName: dto.lastName || '',
        phone: dto.phone || '',
        mediaId: dto.media.id,
      },
      update: {
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        phone: dto.phone,
        mediaId: dto.media?.id,
      },
    });
  }
}
