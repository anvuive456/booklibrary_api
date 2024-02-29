import { Args, Query, Resolver } from '@nestjs/graphql';
import { Ticket } from '../../@generated/ticket/ticket.model';
import { TicketService } from './ticket.service';
import { FindManyTicketArgs } from '../../@generated/ticket/find-many-ticket.args';

@Resolver((of) => Ticket)
export class TicketResolver {
  constructor(private ticketService: TicketService) {}

  @Query((returns) => [Ticket], { nullable: true })
  async getAll(@Args({ nullable: true }) args: FindManyTicketArgs) {
    return this.ticketService.getAll(args);
  }
}
