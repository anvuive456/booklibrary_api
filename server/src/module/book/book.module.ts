import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { PrismaModule } from '../../db/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    PrismaModule,
    // ClientsModule.register([
    //   {
    //     name: 'SEARCH_SERVICE',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 5000,
    //     },
    //   },
    // ]),
  ],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
