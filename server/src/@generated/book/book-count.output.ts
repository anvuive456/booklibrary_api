import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookCount {

    @Field(() => Int, {nullable:false})
    categories?: number;

    @Field(() => Int, {nullable:false})
    tickets?: number;
}
