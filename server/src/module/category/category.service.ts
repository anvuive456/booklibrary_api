import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import {
  CreateCategoryDto,
  DeleteCategoryDto,
  UpdateCategoryDto,
} from './category.dto';
import { Prisma } from '@prisma/client';
import { createSlug } from '../../common/create-slug';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const [data, count] = await this.prisma.$transaction([
      this.prisma.category.findMany(),
      this.prisma.category.count(),
    ]);

    return {
      data,
      count,
    };
  }

  async create(dto: CreateCategoryDto) {
    const data: Prisma.CategoryCreateInput = {
      name: dto.name,
      slug: createSlug(dto.name),
    };
    return this.prisma.category.create({
      data,
    });
  }

  async update(dto: UpdateCategoryDto) {
    const data: Prisma.CategoryUpdateInput = {
      name: dto.name,
      slug: createSlug(dto.name),
    };

    return this.prisma.category.update({
      where: {
        id: dto.id,
      },
      data,
    });
  }

  async delete(dto: DeleteCategoryDto) {
    return this.prisma.category.delete({
      where: { id: dto.id },
    });
  }
}
