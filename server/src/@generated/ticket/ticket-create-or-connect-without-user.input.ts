import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutUserInput } from './ticket-create-without-user.input';

@InputType()
export class TicketCreateOrConnectWithoutUserInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>;

    @Field(() => TicketCreateWithoutUserInput, {nullable:false})
    @Type(() => TicketCreateWithoutUserInput)
    create!: TicketCreateWithoutUserInput;
}
