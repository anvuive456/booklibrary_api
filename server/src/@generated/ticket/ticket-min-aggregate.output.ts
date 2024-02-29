import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TicketMinAggregate {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    rentDate?: Date | string;

    @Field(() => Date, {nullable:true})
    returnDate?: Date | string;

    @Field(() => String, {nullable:true})
    bookId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
