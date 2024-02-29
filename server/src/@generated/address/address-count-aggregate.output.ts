import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    street!: number;

    @Field(() => Int, {nullable:false})
    country!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    city!: number;

    @Field(() => Int, {nullable:false})
    province!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
