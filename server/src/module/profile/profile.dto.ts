import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';
import { AppString } from '../../common/app_string';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const UpdateOrInsertProfileSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email(AppString.errEmail).optional(),
  phone: z.string().regex(phoneRegex, AppString.errPhone).optional(),
  media: z.object({
    id: z.string().cuid(),
    thumbnail: z.string(),
    image: z.string(),
    blurhash: z.string(),
    imageH: z.number(),
    imageW: z.number(),
  }),
});

export class UpdateOrInsertProfileDto extends createZodDto(
  UpdateOrInsertProfileSchema,
) {}
