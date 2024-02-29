import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { MediaCountAggregate } from './media-count-aggregate.output';
import { MediaAvgAggregate } from './media-avg-aggregate.output';
import { MediaSumAggregate } from './media-sum-aggregate.output';
import { MediaMinAggregate } from './media-min-aggregate.output';
import { MediaMaxAggregate } from './media-max-aggregate.output';

@ObjectType()
export class MediaGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    thumbnail!: string;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:false})
    blurhash!: string;

    @Field(() => Int, {nullable:false})
    imageH!: number;

    @Field(() => Int, {nullable:false})
    imageW!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => MediaCountAggregate, {nullable:true})
    _count?: MediaCountAggregate;

    @Field(() => MediaAvgAggregate, {nullable:true})
    _avg?: MediaAvgAggregate;

    @Field(() => MediaSumAggregate, {nullable:true})
    _sum?: MediaSumAggregate;

    @Field(() => MediaMinAggregate, {nullable:true})
    _min?: MediaMinAggregate;

    @Field(() => MediaMaxAggregate, {nullable:true})
    _max?: MediaMaxAggregate;
}
