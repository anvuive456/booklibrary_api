import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TicketMaxOrderByAggregateInput {

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
}
