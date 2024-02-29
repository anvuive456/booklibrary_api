import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTicketsInput } from '../user/user-create-nested-one-without-tickets.input';

@InputType()
export class TicketCreateWithoutBookInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    rentDate!: Date | string;

    @Field(() => Date, {nullable:false})
    returnDate!: Date | string;

    @Field(() => UserCreateNestedOneWithoutTicketsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTicketsInput;
}
