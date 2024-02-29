import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CategoryOrderByRelationAggregateInput } from '../category/category-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';
import { MediaOrderByWithRelationAndSearchRelevanceInput } from '../media/media-order-by-with-relation-and-search-relevance.input';
import { PriceOrderByWithRelationAndSearchRelevanceInput } from '../price/price-order-by-with-relation-and-search-relevance.input';
import { Type } from 'class-transformer';
import { BookOrderByRelevanceInput } from './book-order-by-relevance.input';

@InputType()
export class BookOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: CategoryOrderByRelationAggregateInput;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    tickets?: TicketOrderByRelationAggregateInput;

    @Field(() => MediaOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    media?: MediaOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => PriceOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    @Type(() => PriceOrderByWithRelationAndSearchRelevanceInput)
    price?: PriceOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BookOrderByRelevanceInput, {nullable:true})
    _relevance?: BookOrderByRelevanceInput;
}
