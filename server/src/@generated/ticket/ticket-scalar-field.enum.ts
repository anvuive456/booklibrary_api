import { registerEnumType } from '@nestjs/graphql';

export enum TicketScalarFieldEnum {
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    rentDate = "rentDate",
    returnDate = "returnDate",
    bookId = "bookId",
    userId = "userId"
}


registerEnumType(TicketScalarFieldEnum, { name: 'TicketScalarFieldEnum', description: undefined })
