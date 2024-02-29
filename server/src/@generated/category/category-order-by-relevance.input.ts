import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryOrderByRelevanceFieldEnum } from './category-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CategoryOrderByRelevanceInput {

    @Field(() => [CategoryOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof CategoryOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
