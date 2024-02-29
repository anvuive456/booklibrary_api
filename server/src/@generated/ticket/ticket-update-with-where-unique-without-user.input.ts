import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutUserInput } from './ticket-update-without-user.input';

@InputType()
export class TicketUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => TicketWhereUniqueInput, {nullable:false})
    @Type(() => TicketWhereUniqueInput)
    where!: Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>;

    @Field(() => TicketUpdateWithoutUserInput, {nullable:false})
    @Type(() => TicketUpdateWithoutUserInput)
    data!: TicketUpdateWithoutUserInput;
}
