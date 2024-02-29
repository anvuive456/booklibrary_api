import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutBooksInput } from '../category/category-unchecked-create-nested-many-without-books.input';
import { TicketUncheckedCreateNestedManyWithoutBookInput } from '../ticket/ticket-unchecked-create-nested-many-without-book.input';

@InputType()
export class BookUncheckedCreateWithoutMediaInput {

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

    @Field(() => String, {nullable:false})
    priceId!: string;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutBooksInput, {nullable:true})
    categories?: CategoryUncheckedCreateNestedManyWithoutBooksInput;

    @Field(() => TicketUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    tickets?: TicketUncheckedCreateNestedManyWithoutBookInput;
}
