import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketUncheckedCreateNestedManyWithoutBookInput } from '../ticket/ticket-unchecked-create-nested-many-without-book.input';

@InputType()
export class BookUncheckedCreateWithoutCategoriesInput {

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

    @Field(() => String, {nullable:true})
    mediaId?: string;

    @Field(() => String, {nullable:false})
    priceId!: string;

    @Field(() => TicketUncheckedCreateNestedManyWithoutBookInput, {nullable:true})
    tickets?: TicketUncheckedCreateNestedManyWithoutBookInput;
}
