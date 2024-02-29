import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookUpdateWithoutCategoriesInput } from './book-update-without-categories.input';

@InputType()
export class BookUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => BookUpdateWithoutCategoriesInput)
    data!: BookUpdateWithoutCategoriesInput;
}
