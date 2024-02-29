import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutTicketsInput } from './book-create-without-tickets.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutTicketsInput } from './book-create-or-connect-without-tickets.input';
import { BookUpsertWithoutTicketsInput } from './book-upsert-without-tickets.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateToOneWithWhereWithoutTicketsInput } from './book-update-to-one-with-where-without-tickets.input';

@InputType()
export class BookUpdateOneRequiredWithoutTicketsNestedInput {

    @Field(() => BookCreateWithoutTicketsInput, {nullable:true})
    @Type(() => BookCreateWithoutTicketsInput)
    create?: BookCreateWithoutTicketsInput;

    @Field(() => BookCreateOrConnectWithoutTicketsInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutTicketsInput)
    connectOrCreate?: BookCreateOrConnectWithoutTicketsInput;

    @Field(() => BookUpsertWithoutTicketsInput, {nullable:true})
    @Type(() => BookUpsertWithoutTicketsInput)
    upsert?: BookUpsertWithoutTicketsInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookUpdateToOneWithWhereWithoutTicketsInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutTicketsInput)
    update?: BookUpdateToOneWithWhereWithoutTicketsInput;
}
