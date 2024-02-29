import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class MediaScalarWhereWithAggregatesInput {

    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MediaScalarWhereWithAggregatesInput>;

    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MediaScalarWhereWithAggregatesInput>;

    @Field(() => [MediaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MediaScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    thumbnail?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    blurhash?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    imageH?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    imageW?: IntWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metadata?: JsonNullableWithAggregatesFilter;
}
