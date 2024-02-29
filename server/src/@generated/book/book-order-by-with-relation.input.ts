import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CategoryOrderByRelationAggregateInput } from '../category/category-order-by-relation-aggregate.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';
import { MediaOrderByWithRelationInput } from '../media/media-order-by-with-relation.input';
import { PriceOrderByWithRelationInput } from '../price/price-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class BookOrderByWithRelationInput {

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

    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceId?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: CategoryOrderByRelationAggregateInput;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    tickets?: TicketOrderByRelationAggregateInput;

    @Field(() => MediaOrderByWithRelationInput, {nullable:true})
    media?: MediaOrderByWithRelationInput;

    @Field(() => PriceOrderByWithRelationInput, {nullable:true})
    @Type(() => PriceOrderByWithRelationInput)
    price?: PriceOrderByWithRelationInput;
}
