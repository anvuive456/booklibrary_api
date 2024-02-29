import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BookListRelationFilter } from '../book/book-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => BookListRelationFilter, {nullable:true})
    @Type(() => BookListRelationFilter)
    books?: BookListRelationFilter;
}
