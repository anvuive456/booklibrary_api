import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutBookInput } from './ticket-update-without-book.input';

@InputType()
export class TicketUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>;

    @Field(() => TicketUpdateWithoutBookInput, {nullable:false})
    @Type(() => TicketUpdateWithoutBookInput)
    data!: TicketUpdateWithoutBookInput;
}
