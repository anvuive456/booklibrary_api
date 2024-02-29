import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { Book } from '../../@generated/book/book.model';
import { FindManyBookArgs } from '../../@generated/book/find-many-book.args';
import { FindUniqueBookArgs } from '../../@generated/book/find-unique-book.args';
import { CreateOneBookArgs } from '../../@generated/book/create-one-book.args';
import { UpdateOneBookArgs } from '../../@generated/book/update-one-book.args';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getBooks(args: FindManyBookArgs): Promise<Book[]> {
    return this.prisma.book.findMany(args);
  }

  async getBook(args: FindUniqueBookArgs): Promise<Book | null> {
    return this.prisma.book.findUnique(args);
  }

  create(args: CreateOneBookArgs) {
    return this.prisma.book.create(args);
  }

  update(args: UpdateOneBookArgs) {
    return this.prisma.book.update(args);
  }
}
