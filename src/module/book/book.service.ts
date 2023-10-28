import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import {
  CreateBookDto,
  QueryAllBookDto,
  QueryDetailBookDto,
  UpdateBookDto,
} from './book.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getBooks(dto: QueryAllBookDto) {
    const where: Prisma.BookWhereInput = {
      OR: [
        {
          title: { contains: dto.search, mode: 'insensitive' },
        },
        {
          description: { contains: dto.search, mode: 'insensitive' },
        },
        {
          author: { contains: dto.search, mode: 'insensitive' },
        },
      ],
      category: {
        slug: dto.category,
      },
    };

    const [data, count] = await this.prisma.$transaction([
      this.prisma.book.findMany({
        where,
        skip: (dto.page - 1) * dto.limit,
        take: dto.limit,
        include: {
          category: true,
          media:true,
        },
      }),
      this.prisma.book.count({
        where,
      }),
    ]);

    const total_page = Math.ceil(count < dto.limit ? 1 : count / dto.limit);

    return {
      data,
      count,
      page: dto.page,
      total_page,
    };
  }

  async getDetailBook(dto: QueryDetailBookDto) {
    return this.prisma.book.findUnique({
      where: {
        id: dto.id,
      },
      include: {
        tickets: true,
      },
    });
  }

  async createBook(dto: CreateBookDto) {
    const data: Prisma.BookCreateInput = {
      title: dto.title,
      description: dto.description,
      author: dto.author,
      publisher: dto.publisher,
      category: {
        connect: {
          id: dto.category,
        },
      },
      media: {
        connect: { id: dto.mediaId },
      },
      price: {
        create: dto.price,
      },
    };

    return this.prisma.book.create({
      data,
    });
  }

  async updateBook(id: string, dto: UpdateBookDto) {
    const data: Prisma.BookUpdateInput = {
      title: dto.title,
      description: dto.description,
      author: dto.author,
      publisher: dto.publisher,
      category: {
        connect: {
          id: dto.category,
        },
      },
      updatedAt: new Date(),
    };
    return this.prisma.book.update({
      where: { id },
      data,
    });
  }
}
