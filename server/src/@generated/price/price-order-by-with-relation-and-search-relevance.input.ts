import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookOrderByRelationAggregateInput } from '../book/book-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { PriceOrderByRelevanceInput } from './price-order-by-relevance.input';

@InputType()
export class PriceOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unit?: keyof typeof SortOrder;

    @Field(() => BookOrderByRelationAggregateInput, {nullable:true})
    @Type(() => BookOrderByRelationAggregateInput)
    book?: BookOrderByRelationAggregateInput;

    @Field(() => PriceOrderByRelevanceInput, {nullable:true})
    @Type(() => PriceOrderByRelevanceInput)
    _relevance?: PriceOrderByRelevanceInput;
}
