import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';
import sharp from 'sharp';

const CreateMediaSchema = z.object({
  thumbnail: z.string(),
  image: z.string(),
  blurhash: z.string(),
  imageH: z.number(),
  imageW: z.number(),
  metadata: z.any().optional(),
});

export class CreateMediaDto extends createZodDto(CreateMediaSchema) {}

const DeleteMediaSchema = z.object({
  id: z.string().cuid(),
});

export class DeleteMediaDto extends createZodDto(DeleteMediaSchema) {}
