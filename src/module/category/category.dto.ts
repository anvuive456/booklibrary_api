import { z } from 'nestjs-zod/z';
import { Prisma } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { AppString } from '../../common/app_string';

const CreateCategorySchema = z
  .object({
    name: z.string(),
  })
  .strict();

export class CreateCategoryDto extends createZodDto(CreateCategorySchema) {}

const DeleteCategorySchema = z.object({
  id: z.string(),
});

export class DeleteCategoryDto extends createZodDto(DeleteCategorySchema) {}

const UpdateCategorySchema = z.object({
  id: z.string().cuid(AppString.errCuid),
  name: z.string(),
});

export class UpdateCategoryDto extends createZodDto(UpdateCategorySchema) {}
