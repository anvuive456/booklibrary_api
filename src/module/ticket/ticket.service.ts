import { Injectable } from '@nestjs/common';
import { CreateTicketDto, GetAllTicketDto } from './ticket.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../db/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async getAllTickets(dto: GetAllTicketDto) {
    const where: Prisma.TicketWhereInput = {
      OR: [
        {
          book: {
            title: {
              contains: dto.search,
              mode: 'insensitive',
            },
          },
        },
        {
          user: {
            profile: {
              OR: [
                {
                  firstName: {
                    contains: dto.search,
                    mode: 'insensitive',
                  },
                },
                {
                  lastName: {
                    contains: dto.search,
                    mode: 'insensitive',
                  },
                },
              ],
            },
          },
        },
      ],
    };
    const [data, count] = await this.prisma.$transaction([
      this.prisma.ticket.findMany({
        where,
        skip: (dto.page - 1) * dto.limit,
        take: dto.limit,
      }),
      this.prisma.ticket.count({ where }),
    ]);

    const total_page = Math.ceil(count < dto.limit ? 1 : count / dto.limit);

    return {
      data,
      count,
      page: dto.page,
      total_page,
    };
  }

  async createTicket(dto: CreateTicketDto) {
    const data: Prisma.TicketUncheckedCreateInput = dto;

    return this.prisma.ticket.create({
      data,
    });
  }
}
