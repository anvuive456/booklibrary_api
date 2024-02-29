import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma.service';
import { FindManyTicketArgs } from '../../@generated/ticket/find-many-ticket.args';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  getAll(args: FindManyTicketArgs) {
    return this.prisma.ticket.findMany(args);
  }
}
