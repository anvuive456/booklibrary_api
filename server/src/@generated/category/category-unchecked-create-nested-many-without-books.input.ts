import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutBooksInput } from './category-create-without-books.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutBooksInput } from './category-create-or-connect-without-books.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryUncheckedCreateNestedManyWithoutBooksInput {

    @Field(() => [CategoryCreateWithoutBooksInput], {nullable:true})
    @Type(() => CategoryCreateWithoutBooksInput)
    create?: Array<CategoryCreateWithoutBooksInput>;

    @Field(() => [CategoryCreateOrConnectWithoutBooksInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutBooksInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutBooksInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;
}
