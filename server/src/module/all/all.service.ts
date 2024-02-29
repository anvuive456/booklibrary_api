import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';

@Injectable()
export class AllService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const [books, count] = await this.prisma.$transaction([
      this.prisma.book.findMany({
        include: {
          _count: true,
          price: {
            include: {
              _count: true,
            },
          },
          categories: {
            include: {
              _count: true,
            },
          },
          media: true,
          tickets: true,
        },
      }),
      this.prisma.book.count(),
    ]);

    return {
      books,
      count,
    };
  }
}
