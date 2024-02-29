import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { BookUpdateWithoutTicketsInput } from './book-update-without-tickets.input';

@InputType()
export class BookUpdateToOneWithWhereWithoutTicketsInput {

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;

    @Field(() => BookUpdateWithoutTicketsInput, {nullable:false})
    @Type(() => BookUpdateWithoutTicketsInput)
    data!: BookUpdateWithoutTicketsInput;
}
