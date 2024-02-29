import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ProfileCreateNestedOneWithoutMediaInput } from '../profile/profile-create-nested-one-without-media.input';

@InputType()
export class MediaCreateWithoutBookInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => ProfileCreateNestedOneWithoutMediaInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutMediaInput;
}
