import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutPriceInput } from './book-create-without-price.input';

@InputType()
export class BookCreateOrConnectWithoutPriceInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookCreateWithoutPriceInput, {nullable:false})
    @Type(() => BookCreateWithoutPriceInput)
    create!: BookCreateWithoutPriceInput;
}
