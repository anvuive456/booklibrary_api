import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutBooksInput } from '../category/category-create-nested-many-without-books.input';
import { TicketCreateNestedManyWithoutBookInput } from '../ticket/ticket-create-nested-many-without-book.input';
import { PriceCreateNestedOneWithoutBookInput } from '../price/price-create-nested-one-without-book.input';
import { Type } from 'class-transformer';

@InputType()
export class BookCreateWithoutMediaInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    publisher!: string;

    @Field(() => String, {nullable:false})
    author!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    epub?: string;

    @Field(() => CategoryCreateNestedManyWithoutBooksInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutBooksInput;

    @Field(() => TicketCreateNestedManyWithoutBookInput, {nullable:true})
    tickets?: TicketCreateNestedManyWithoutBookInput;

    @Field(() => PriceCreateNestedOneWithoutBookInput, {nullable:false})
    @Type(() => PriceCreateNestedOneWithoutBookInput)
    price!: PriceCreateNestedOneWithoutBookInput;
}
