import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { ProfileNullableRelationFilter } from '../profile/profile-nullable-relation-filter.input';
import { BookNullableRelationFilter } from '../book/book-nullable-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class MediaWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [MediaWhereInput], {nullable:true})
    AND?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    OR?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    NOT?: Array<MediaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    thumbnail?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    blurhash?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    imageH?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    imageW?: IntFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => ProfileNullableRelationFilter, {nullable:true})
    profile?: ProfileNullableRelationFilter;

    @Field(() => BookNullableRelationFilter, {nullable:true})
    @Type(() => BookNullableRelationFilter)
    book?: BookNullableRelationFilter;
}
