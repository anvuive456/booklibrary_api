import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from '../profile/profile-order-by-with-relation-and-search-relevance.input';
import { BookOrderByWithRelationAndSearchRelevanceInput } from '../book/book-order-by-with-relation-and-search-relevance.input';
import { Type } from 'class-transformer';
import { MediaOrderByRelevanceInput } from './media-order-by-relevance.input';

@InputType()
export class MediaOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => ProfileOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    profile?: ProfileOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BookOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    @Type(() => BookOrderByWithRelationAndSearchRelevanceInput)
    book?: BookOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MediaOrderByRelevanceInput, {nullable:true})
    _relevance?: MediaOrderByRelevanceInput;
}
