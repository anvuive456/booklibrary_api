import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const GetAllTicketSchema = z.object({
  page: z.number().default(1),
  limit: z.number().default(10),
  search: z.string().optional().default(''),
});

export class GetAllTicketDto extends createZodDto(GetAllTicketSchema) {}

const CreateTicketSchema = z.object({
  userId: z.string(),
  bookId: z.string(),
  rentDate: z.dateString(),
  returnDate: z.dateString(),
});

export class CreateTicketDto extends createZodDto(CreateTicketSchema) {}
