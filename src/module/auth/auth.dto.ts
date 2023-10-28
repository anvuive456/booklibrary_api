import { z } from 'nestjs-zod/z';
import { createZodDto, zodToOpenAPI } from 'nestjs-zod';

const SignInSchema = z.object({
  username: z.string().min(8, 'Tên đăng nhập ít nhất 8 kí tự'),
  password: z
    .password()
    .min(8)
    .atLeastOne('digit')
    .atLeastOne('lowercase')
    .atLeastOne('uppercase')
    .atLeastOne('special'),
});

const signInSwaggerSchema = zodToOpenAPI(SignInSchema);

export class SignInDto extends createZodDto(SignInSchema) {}

const SignUpSchema = z.object({
  username: z.string().min(8, 'Tên đăng nhập ít nhất 8 kí tự'),
  password: z
    .password()
    .min(8)
    .atLeastOne('digit')
    .atLeastOne('lowercase')
    .atLeastOne('uppercase')
    .atLeastOne('special')
    .describe('Password'),
});

export class SignUpDto extends createZodDto(SignUpSchema) {}
