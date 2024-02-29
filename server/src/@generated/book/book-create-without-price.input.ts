import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutBooksInput } from '../category/category-create-nested-many-without-books.input';
import { TicketCreateNestedManyWithoutBookInput } from '../ticket/ticket-create-nested-many-without-book.input';
import { MediaCreateNestedOneWithoutBookInput } from '../media/media-create-nested-one-without-book.input';

@InputType()
export class BookCreateWithoutPriceInput {

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

    @Field(() => MediaCreateNestedOneWithoutBookInput, {nullable:true})
    media?: MediaCreateNestedOneWithoutBookInput;
}
