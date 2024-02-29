import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { BookOrderByWithRelationAndSearchRelevanceInput } from './book-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookScalarFieldEnum } from './book-scalar-field.enum';

@ArgsType()
export class FindManyBookArgs {

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;

    @Field(() => [BookOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BookOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BookScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookScalarFieldEnum>;
}
