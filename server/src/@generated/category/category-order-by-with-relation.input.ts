import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookOrderByRelationAggregateInput } from '../book/book-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => BookOrderByRelationAggregateInput, {nullable:true})
    @Type(() => BookOrderByRelationAggregateInput)
    books?: BookOrderByRelationAggregateInput;
}
