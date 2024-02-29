import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MediaAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    imageH?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageW?: keyof typeof SortOrder;
}
