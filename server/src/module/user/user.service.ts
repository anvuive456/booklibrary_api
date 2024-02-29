import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { User } from '../../@generated/user/user.model';
import { Role } from '../../@generated/prisma/role.enum';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        username,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: false,
        role: true,
        password: false,
        createdAt: true,
        updatedAt: true,
        profile: true,
      },
    });
  }

  async createLibrarian(username: string, password: string) {
    return this.prisma.user.create({
      data: {
        username,
        password,
        role: Role.librarian,
      },
    });
  }

  async createMember(username: string, password: string) {
    return this.prisma.user.create({
      data: {
        username,
        password,
        role: Role.member,
      },
    });
  }

  async getUserByProfileId(id: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        profile: {
          id,
        },
      },
    });
  }
}
