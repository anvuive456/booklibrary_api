import { registerEnumType } from '@nestjs/graphql';

export enum TicketOrderByRelevanceFieldEnum {
    bookId = "bookId",
    userId = "userId"
}


registerEnumType(TicketOrderByRelevanceFieldEnum, { name: 'TicketOrderByRelevanceFieldEnum', description: undefined })
