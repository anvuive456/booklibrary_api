import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MediaCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    thumbnail!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    blurhash!: number;

    @Field(() => Int, {nullable:false})
    imageH!: number;

    @Field(() => Int, {nullable:false})
    imageW!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
