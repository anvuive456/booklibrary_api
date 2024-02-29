import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MediaMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    thumbnail?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    blurhash?: string;

    @Field(() => Int, {nullable:true})
    imageH?: number;

    @Field(() => Int, {nullable:true})
    imageW?: number;
}
