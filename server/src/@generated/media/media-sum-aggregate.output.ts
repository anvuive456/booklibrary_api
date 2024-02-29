import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MediaSumAggregate {

    @Field(() => Int, {nullable:true})
    imageH?: number;

    @Field(() => Int, {nullable:true})
    imageW?: number;
}
