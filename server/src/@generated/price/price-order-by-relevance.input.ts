import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceOrderByRelevanceFieldEnum } from './price-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PriceOrderByRelevanceInput {

    @Field(() => [PriceOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof PriceOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
