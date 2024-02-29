import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';
import { AppString } from '../../common/app_string';
import { PriceUnit } from '@prisma/client';

const QueryAllBookSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(10),
  search: z.string().optional().default(''),
  category: z.string().optional(),
});

export class QueryAllBookDto extends createZodDto(QueryAllBookSchema) {}

const QueryDetailBookSchema = z.object({
  id: z.string().cuid(AppString.errCuid),
});

export class QueryDetailBookDto extends createZodDto(QueryDetailBookSchema) {}

const CreateBookSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  publisher: z.string(),
  category: z.string().optional(),
  mediaId: z.string().optional(),
  price: z.object({
    value: z.number(),
    unit: z.enum([PriceUnit.USD, PriceUnit.VND, PriceUnit.EURO]),
  }),
});

export class CreateBookDto extends createZodDto(CreateBookSchema) {}

const UpdateBookSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  author: z.string().optional(),
  publisher: z.string().optional(),
  category: z.string().optional(),
  mediaId: z.string().optional(),
});

export class UpdateBookDto extends createZodDto(UpdateBookSchema) {}
