import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutCategoriesInput } from './book-create-without-categories.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutCategoriesInput } from './book-create-or-connect-without-categories.input';
import { BookUpsertWithWhereUniqueWithoutCategoriesInput } from './book-upsert-with-where-unique-without-categories.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithWhereUniqueWithoutCategoriesInput } from './book-update-with-where-unique-without-categories.input';
import { BookUpdateManyWithWhereWithoutCategoriesInput } from './book-update-many-with-where-without-categories.input';
import { BookScalarWhereInput } from './book-scalar-where.input';

@InputType()
export class BookUncheckedUpdateManyWithoutCategoriesNestedInput {

    @Field(() => [BookCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => BookCreateWithoutCategoriesInput)
    create?: Array<BookCreateWithoutCategoriesInput>;

    @Field(() => [BookCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => BookCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<BookCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [BookUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => BookUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<BookUpsertWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>>;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>>;

    @Field(() => [BookUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => BookUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<BookUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [BookUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => BookUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<BookUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [BookScalarWhereInput], {nullable:true})
    @Type(() => BookScalarWhereInput)
    deleteMany?: Array<BookScalarWhereInput>;
}
