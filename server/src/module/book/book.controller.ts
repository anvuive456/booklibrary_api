import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { BookService } from './book.service';
import {
  CreateBookDto,
  QueryAllBookDto,
  QueryDetailBookDto,
  UpdateBookDto,
} from './book.dto';
import { Roles, RolesGuard } from '../auth/guards/role.guard';
import { Role } from '@prisma/client';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @ApiQuery({
    name: 'search',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
  })
  @Get('')
  async getAll(@Query() query: QueryAllBookDto) {
    return this.bookService.getBooks(query);
  }

  @Get(':id')
  async getDetail(@Param() query: QueryDetailBookDto) {
    return this.bookService.getDetailBook(query);
  }

  @UseGuards(AuthenticationGuard, RolesGuard)
  @Roles(Role.librarian)
  @ApiBearerAuth('Bearer')
  @ApiBody({
    type: CreateBookDto,
    examples: {
      default: {
        value: {
          title: 'Book 1',
          description: 'Book 1',
          author: 'An Tran',
          publisher: 'An tran',
          category: 'cllv7d8tj0000izd7ovoayzyy',
          mediaId: 'cllv6vvds0000izmnzrhif30f',
          price: {
            value: 100,
            unit: 'VND',
          },
        },
      },
    },
  })
  @Post()
  async createBook(@Body() dto: CreateBookDto) {
    return this.bookService.createBook(dto);
  }

  @UseGuards(AuthenticationGuard, RolesGuard)
  @Roles(Role.librarian)
  @Put()
  async updateBook(
    @Param() param: QueryDetailBookDto,
    @Body() dto: UpdateBookDto,
  ) {
    return this.bookService.updateBook(param.id, dto);
  }
}
