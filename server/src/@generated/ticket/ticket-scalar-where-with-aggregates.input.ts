import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TicketScalarWhereWithAggregatesInput {

    @Field(() => [TicketScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TicketScalarWhereWithAggregatesInput>;

    @Field(() => [TicketScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TicketScalarWhereWithAggregatesInput>;

    @Field(() => [TicketScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TicketScalarWhereWithAggregatesInput>;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    rentDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    returnDate?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
