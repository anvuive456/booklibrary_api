import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutCategoriesInput } from './book-create-without-categories.input';

@InputType()
export class BookCreateOrConnectWithoutCategoriesInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => BookCreateWithoutCategoriesInput)
    create!: BookCreateWithoutCategoriesInput;
}
