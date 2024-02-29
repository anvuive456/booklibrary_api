import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutTicketsInput } from './book-create-without-tickets.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutTicketsInput } from './book-create-or-connect-without-tickets.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookCreateNestedOneWithoutTicketsInput {

    @Field(() => BookCreateWithoutTicketsInput, {nullable:true})
    @Type(() => BookCreateWithoutTicketsInput)
    create?: BookCreateWithoutTicketsInput;

    @Field(() => BookCreateOrConnectWithoutTicketsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutTicketsInput)
    connectOrCreate?: BookCreateOrConnectWithoutTicketsInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;
}
