import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TicketScalarWhereInput {

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    AND?: Array<TicketScalarWhereInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    OR?: Array<TicketScalarWhereInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    NOT?: Array<TicketScalarWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    rentDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    returnDate?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    bookId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
