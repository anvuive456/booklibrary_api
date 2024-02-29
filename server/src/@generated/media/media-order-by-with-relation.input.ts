import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { BookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class MediaOrderByWithRelationInput {

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

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    profile?: ProfileOrderByWithRelationInput;

    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    @Type(() => BookOrderByWithRelationInput)
    book?: BookOrderByWithRelationInput;
}
