import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    province?: string;
}
