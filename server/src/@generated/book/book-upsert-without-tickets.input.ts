import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUpdateWithoutTicketsInput } from './book-update-without-tickets.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutTicketsInput } from './book-create-without-tickets.input';
import { BookWhereInput } from './book-where.input';

@InputType()
export class BookUpsertWithoutTicketsInput {

    @Field(() => BookUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => BookUpdateWithoutTicketsInput)
    update!: BookUpdateWithoutTicketsInput;

    @Field(() => BookCreateWithoutTicketsInput, {nullable:false})
    @Type(() => BookCreateWithoutTicketsInput)
    create!: BookCreateWithoutTicketsInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;
}
