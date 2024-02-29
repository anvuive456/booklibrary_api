import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaOrderByRelevanceFieldEnum } from './media-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MediaOrderByRelevanceInput {

    @Field(() => [MediaOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof MediaOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
