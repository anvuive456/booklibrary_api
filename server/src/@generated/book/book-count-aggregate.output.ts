import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    publisher!: number;

    @Field(() => Int, {nullable:false})
    author!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    epub!: number;

    @Field(() => Int, {nullable:false})
    mediaId!: number;

    @Field(() => Int, {nullable:false})
    priceId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}