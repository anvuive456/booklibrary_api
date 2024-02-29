import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import {
  CreateBookDto,
  QueryAllBookDto,
  QueryDetailBookDto,
  UpdateBookDto,
} from './book.dto';
import { Prisma } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class BookService {
  constructor(
    // @Inject('SEARCH_SERVICE') private client: ClientProxy,
    private prisma: PrismaService,
  ) {}

  // async #searchBookByTitle(title: string): Promise<string[]> {
  //   const ids = await lastValueFrom(this.client.send({ cmd: 'search' }, title));
  //   return ids;
  // }

  async getBooks(dto: QueryAllBookDto) {
    const fullText = dto.search.trim()
      ? dto.search.trim().split(' ').join(' | ')
      : '';
    console.log(fullText, fullText.length);
    const textSearchOrNormal: string | Prisma.StringFilter<'Book'> | undefined =
      fullText
        ? { search: fullText }
        : { contains: fullText, mode: 'insensitive' };
    // const ids = await this.#searchBookByTitle(dto.search);
    const where: Prisma.BookWhereInput = {
      OR: [
        // {
        //   title: { contains: dto.search, mode: 'insensitive' },
        // },
        // {
        //   description: { contains: dto.search, mode: 'insensitive' },
        // },
        // {
        //   author: { contains: dto.search, mode: 'insensitive' },
        // },
        {
          title: textSearchOrNormal,
        },
        {
          description: textSearchOrNormal,
        },
        {
          author: textSearchOrNormal,
        },
      ],
      // id: {
      //   in: ids,
      // },
    };

    const [data, count] = await this.prisma.$transaction([
      this.prisma.book.findMany({
        where,
        skip: (dto.page - 1) * dto.limit,
        take: dto.limit,
        include: {
          categories: true,
          media: true,
          price: {
            select: {
              value: true,
              unit: true,
            },
          },
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
      // categories: {
      //   connect: {
      //     id: dto.category,
      //   },
      // },
      // media: {
      //   connect: { id: dto.mediaId },
      // },
      price: {
        create: dto.price,
      },
    };

    const created = await this.prisma.book.create({
      data,
    });
    // this.client
    //   .send({ cmd: 'index' }, { terms: created.title, id: created.id })
    //   .subscribe(console.log, console.log, () => console.log('done'));
    return created;
  }

  async updateBook(id: string, dto: UpdateBookDto) {
    const data: Prisma.BookUpdateInput = {
      title: dto.title,
      description: dto.description,
      author: dto.author,
      publisher: dto.publisher,
      categories: {
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
