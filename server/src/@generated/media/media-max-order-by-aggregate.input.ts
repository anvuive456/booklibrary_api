import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MediaMaxOrderByAggregateInput {

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
}
