import {
  Body,
  Controller,
  Request,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationGuard } from '../auth/guards/auth.guard';
import { Roles, RolesGuard } from '../auth/guards/role.guard';
import { Role } from '@prisma/client';
import { TicketService } from './ticket.service';
import { CreateTicketDto, GetAllTicketDto } from './ticket.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ticket')
@Controller('tickets')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @UseGuards(AuthenticationGuard, RolesGuard)
  @Roles(Role.librarian)
  @Get()
  async getAllTickets(@Query() dto: GetAllTicketDto) {
    return this.ticketService.getAllTickets(dto);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  async createTicket(@Request() req) {
    return this.ticketService.createTicket({
      userId: req.user.id,
      bookId: req.body.bookId,
      rentDate: req.body.rentDate,
      returnDate: req.body.returnDate,
    });
  }
}
