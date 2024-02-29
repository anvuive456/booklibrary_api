import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutBookInput } from './ticket-create-without-book.input';

@InputType()
export class TicketCreateOrConnectWithoutBookInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>;

    @Field(() => TicketCreateWithoutBookInput, {nullable:false})
    @Type(() => TicketCreateWithoutBookInput)
    create!: TicketCreateWithoutBookInput;
}
