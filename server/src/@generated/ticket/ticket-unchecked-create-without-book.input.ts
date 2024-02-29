import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TicketUncheckedCreateWithoutBookInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    rentDate!: Date | string;

    @Field(() => Date, {nullable:false})
    returnDate!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
