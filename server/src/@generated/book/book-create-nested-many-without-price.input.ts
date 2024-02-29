import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutPriceInput } from './book-create-without-price.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutPriceInput } from './book-create-or-connect-without-price.input';
import { BookCreateManyPriceInputEnvelope } from './book-create-many-price-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedManyWithoutPriceInput {

    @Field(() => [BookCreateWithoutPriceInput], {nullable:true})
    @Type(() => BookCreateWithoutPriceInput)
    create?: Array<BookCreateWithoutPriceInput>;

    @Field(() => [BookCreateOrConnectWithoutPriceInput], {nullable:true})
    @Type(() => BookCreateOrConnectWithoutPriceInput)
    connectOrCreate?: Array<BookCreateOrConnectWithoutPriceInput>;

    @Field(() => BookCreateManyPriceInputEnvelope, {nullable:true})
    @Type(() => BookCreateManyPriceInputEnvelope)
    createMany?: BookCreateManyPriceInputEnvelope;

    @Field(() => [BookWhereUniqueInput], {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>>;
}
