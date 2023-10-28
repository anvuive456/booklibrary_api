import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { Roles, RolesGuard } from '../auth/guards/role.guard';
import { Role } from '@prisma/client';
import {
  CreateCategoryDto,
  DeleteCategoryDto,
  UpdateCategoryDto,
} from './category.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.categoryService.getAll();
  }

  @UseGuards(AuthenticationGuard, RolesGuard)
  @Roles(Role.librarian)
  @ApiBearerAuth('Bearer')
  @ApiBody({
    type: CreateCategoryDto,
    examples: {
      default: {
        value: {
          name: 'Category 1',
        },
      },
    },
  })
  @Post()
  async createCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @UseGuards(AuthenticationGuard, RolesGuard)
  @Roles(Role.librarian)
  @Put()
  async updateCategory(@Body() dto: UpdateCategoryDto) {
    return this.categoryService.update(dto);
  }

  @UseGuards(AuthenticationGuard, RolesGuard)
  @Roles(Role.librarian)
  @Delete(':id')
  async deleteCategory(@Param() dto: DeleteCategoryDto) {
    return this.categoryService.delete(dto);
  }
}
