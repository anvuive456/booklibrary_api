import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TicketCountOrderByAggregateInput } from './ticket-count-order-by-aggregate.input';
import { TicketMaxOrderByAggregateInput } from './ticket-max-order-by-aggregate.input';
import { TicketMinOrderByAggregateInput } from './ticket-min-order-by-aggregate.input';

@InputType()
export class TicketOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => TicketCountOrderByAggregateInput, {nullable:true})
    _count?: TicketCountOrderByAggregateInput;

    @Field(() => TicketMaxOrderByAggregateInput, {nullable:true})
    _max?: TicketMaxOrderByAggregateInput;

    @Field(() => TicketMinOrderByAggregateInput, {nullable:true})
    _min?: TicketMinOrderByAggregateInput;
}
