import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookOrderByRelationAggregateInput } from '../book/book-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class PriceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unit?: keyof typeof SortOrder;

    @Field(() => BookOrderByRelationAggregateInput, {nullable:true})
    @Type(() => BookOrderByRelationAggregateInput)
    book?: BookOrderByRelationAggregateInput;
}
