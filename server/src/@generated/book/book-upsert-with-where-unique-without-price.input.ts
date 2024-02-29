import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookUpdateWithoutPriceInput } from './book-update-without-price.input';
import { BookCreateWithoutPriceInput } from './book-create-without-price.input';

@InputType()
export class BookUpsertWithWhereUniqueWithoutPriceInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookUpdateWithoutPriceInput, {nullable:false})
    @Type(() => BookUpdateWithoutPriceInput)
    update!: BookUpdateWithoutPriceInput;

    @Field(() => BookCreateWithoutPriceInput, {nullable:false})
    @Type(() => BookCreateWithoutPriceInput)
    create!: BookCreateWithoutPriceInput;
}
