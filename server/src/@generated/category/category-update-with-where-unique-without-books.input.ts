import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutBooksInput } from './category-update-without-books.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutBooksInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateWithoutBooksInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutBooksInput)
    data!: CategoryUpdateWithoutBooksInput;
}
