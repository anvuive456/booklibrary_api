import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookOrderByRelevanceFieldEnum } from './book-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookOrderByRelevanceInput {

    @Field(() => [BookOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BookOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
