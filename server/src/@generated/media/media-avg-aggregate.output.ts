import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MediaAvgAggregate {

    @Field(() => Float, {nullable:true})
    imageH?: number;

    @Field(() => Float, {nullable:true})
    imageW?: number;
}
