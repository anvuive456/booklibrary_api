import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutBooksInput } from './category-create-without-books.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutBooksInput } from './category-create-or-connect-without-books.input';
import { CategoryUpsertWithWhereUniqueWithoutBooksInput } from './category-upsert-with-where-unique-without-books.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutBooksInput } from './category-update-with-where-unique-without-books.input';
import { CategoryUpdateManyWithWhereWithoutBooksInput } from './category-update-many-with-where-without-books.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUpdateManyWithoutBooksNestedInput {

    @Field(() => [CategoryCreateWithoutBooksInput], {nullable:true})
    @Type(() => CategoryCreateWithoutBooksInput)
    create?: Array<CategoryCreateWithoutBooksInput>;

    @Field(() => [CategoryCreateOrConnectWithoutBooksInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutBooksInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutBooksInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutBooksInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutBooksInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutBooksInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutBooksInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutBooksInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutBooksInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutBooksInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutBooksInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutBooksInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
