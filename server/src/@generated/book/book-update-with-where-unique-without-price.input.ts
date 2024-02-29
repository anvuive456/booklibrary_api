import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookUpdateWithoutPriceInput } from './book-update-without-price.input';

@InputType()
export class BookUpdateWithWhereUniqueWithoutPriceInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookUpdateWithoutPriceInput, {nullable:false})
    @Type(() => BookUpdateWithoutPriceInput)
    data!: BookUpdateWithoutPriceInput;
}
