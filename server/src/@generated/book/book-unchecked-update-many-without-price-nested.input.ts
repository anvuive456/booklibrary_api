import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutPriceInput } from './book-create-without-price.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutPriceInput } from './book-create-or-connect-without-price.input';
import { BookUpsertWithWhereUniqueWithoutPriceInput } from './book-upsert-with-where-unique-without-price.input';
import { BookCreateManyPriceInputEnvelope } from './book-create-many-price-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateWithWhereUniqueWithoutPriceInput } from './book-update-with-where-unique-without-price.input';
import { BookUpdateManyWithWhereWithoutPriceInput } from './book-update-many-with-where-without-price.input';
import { BookScalarWhereInput } from './book-scalar-where.input';

@InputType()
export class BookUncheckedUpdateManyWithoutPriceNestedInput {

    @Field(() => [BookCreateWithoutPriceInput], {nullable:true})
    @Type(() => BookCreateWithoutPriceInput)
    create?: Array<BookCreateWithoutPriceInput>;

    @Field(() => [BookCreateOrConnectWithoutPriceInput], {nullable:true})
    @Type(() => BookCreateOrConnectWithoutPriceInput)
    connectOrCreate?: Array<BookCreateOrConnectWithoutPriceInput>;

    @Field(() => [BookUpsertWithWhereUniqueWithoutPriceInput], {nullable:true})
    @Type(() => BookUpsertWithWhereUniqueWithoutPriceInput)
    upsert?: Array<BookUpsertWithWhereUniqueWithoutPriceInput>;

    @Field(() => BookCreateManyPriceInputEnvelope, {nullable:true})
    @Type(() => BookCreateManyPriceInputEnvelope)
    createMany?: BookCreateManyPriceInputEnvelope;

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

    @Field(() => [BookUpdateWithWhereUniqueWithoutPriceInput], {nullable:true})
    @Type(() => BookUpdateWithWhereUniqueWithoutPriceInput)
    update?: Array<BookUpdateWithWhereUniqueWithoutPriceInput>;

    @Field(() => [BookUpdateManyWithWhereWithoutPriceInput], {nullable:true})
    @Type(() => BookUpdateManyWithWhereWithoutPriceInput)
    updateMany?: Array<BookUpdateManyWithWhereWithoutPriceInput>;

    @Field(() => [BookScalarWhereInput], {nullable:true})
    @Type(() => BookScalarWhereInput)
    deleteMany?: Array<BookScalarWhereInput>;
}
