import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { TicketListRelationFilter } from '../ticket/ticket-list-relation-filter.input';
import { MediaNullableRelationFilter } from '../media/media-nullable-relation-filter.input';
import { PriceRelationFilter } from '../price/price-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class BookWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    mediaId?: string;

    @Field(() => [BookWhereInput], {nullable:true})
    AND?: Array<BookWhereInput>;

    @Field(() => [BookWhereInput], {nullable:true})
    OR?: Array<BookWhereInput>;

    @Field(() => [BookWhereInput], {nullable:true})
    NOT?: Array<BookWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    publisher?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    author?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    epub?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    priceId?: StringFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    categories?: CategoryListRelationFilter;

    @Field(() => TicketListRelationFilter, {nullable:true})
    tickets?: TicketListRelationFilter;

    @Field(() => MediaNullableRelationFilter, {nullable:true})
    media?: MediaNullableRelationFilter;

    @Field(() => PriceRelationFilter, {nullable:true})
    @Type(() => PriceRelationFilter)
    price?: PriceRelationFilter;
}
