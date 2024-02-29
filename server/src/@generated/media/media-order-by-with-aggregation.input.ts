import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { MediaCountOrderByAggregateInput } from './media-count-order-by-aggregate.input';
import { MediaAvgOrderByAggregateInput } from './media-avg-order-by-aggregate.input';
import { MediaMaxOrderByAggregateInput } from './media-max-order-by-aggregate.input';
import { MediaMinOrderByAggregateInput } from './media-min-order-by-aggregate.input';
import { MediaSumOrderByAggregateInput } from './media-sum-order-by-aggregate.input';

@InputType()
export class MediaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blurhash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageH?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageW?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => MediaCountOrderByAggregateInput, {nullable:true})
    _count?: MediaCountOrderByAggregateInput;

    @Field(() => MediaAvgOrderByAggregateInput, {nullable:true})
    _avg?: MediaAvgOrderByAggregateInput;

    @Field(() => MediaMaxOrderByAggregateInput, {nullable:true})
    _max?: MediaMaxOrderByAggregateInput;

    @Field(() => MediaMinOrderByAggregateInput, {nullable:true})
    _min?: MediaMinOrderByAggregateInput;

    @Field(() => MediaSumOrderByAggregateInput, {nullable:true})
    _sum?: MediaSumOrderByAggregateInput;
}
