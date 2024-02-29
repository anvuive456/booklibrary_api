import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateNestedOneWithoutTicketsInput } from '../book/book-create-nested-one-without-tickets.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    rentDate!: Date | string;

    @Field(() => Date, {nullable:false})
    returnDate!: Date | string;

    @Field(() => BookCreateNestedOneWithoutTicketsInput, {nullable:false})
    @Type(() => BookCreateNestedOneWithoutTicketsInput)
    book!: BookCreateNestedOneWithoutTicketsInput;
}
