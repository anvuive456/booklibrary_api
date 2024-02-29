import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { PrismaModule } from '../../db/prisma.module';
import { MediaService } from '../media/media.service';

@Module({
  imports: [PrismaModule],
  providers: [BookResolver, BookService, MediaService],
})
export class BookModule {}
