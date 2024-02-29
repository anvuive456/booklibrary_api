import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutCategoriesInput } from './book-create-without-categories.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutCategoriesInput } from './book-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedManyWithoutCategoriesInput {

    @Field(() => [BookCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => BookCreateWithoutCategoriesInput)
    create?: Array<BookCreateWithoutCategoriesInput>;

    @Field(() => [BookCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => BookCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<BookCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>>;
}
