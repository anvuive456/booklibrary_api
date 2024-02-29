import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { UpdateOrInsertProfileDto } from './profile.dto';
import { FindManyProfileArgs } from '../../@generated/profile/find-many-profile.args';
import { CreateOneProfileArgs } from '../../@generated/profile/create-one-profile.args';
import { User } from '../../@generated/user/user.model';
import { Profile } from '../../@generated/profile/profile.model';
import { FindUniqueProfileArgs } from '../../@generated/profile/find-unique-profile.args';

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

  async getAll(args: FindManyProfileArgs): Promise<Profile[]> {
    return this.prisma.profile.findMany(args);
  }

  createProfile(args: CreateOneProfileArgs): Promise<Profile> {
    return this.prisma.profile.create(args);
  }

  async getById(args: FindUniqueProfileArgs) {
    return this.prisma.profile.findUnique(args);
  }
}
