import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BookCountOrderByAggregateInput } from './book-count-order-by-aggregate.input';
import { BookMaxOrderByAggregateInput } from './book-max-order-by-aggregate.input';
import { BookMinOrderByAggregateInput } from './book-min-order-by-aggregate.input';

@InputType()
export class BookOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publisher?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    epub?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    mediaId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    priceId?: keyof typeof SortOrder;

    @Field(() => BookCountOrderByAggregateInput, {nullable:true})
    _count?: BookCountOrderByAggregateInput;

    @Field(() => BookMaxOrderByAggregateInput, {nullable:true})
    _max?: BookMaxOrderByAggregateInput;

    @Field(() => BookMinOrderByAggregateInput, {nullable:true})
    _min?: BookMinOrderByAggregateInput;
}
