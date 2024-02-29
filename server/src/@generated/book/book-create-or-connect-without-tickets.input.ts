import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutTicketsInput } from './book-create-without-tickets.input';

@InputType()
export class BookCreateOrConnectWithoutTicketsInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookCreateWithoutTicketsInput, {nullable:false})
    @Type(() => BookCreateWithoutTicketsInput)
    create!: BookCreateWithoutTicketsInput;
}
