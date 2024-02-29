import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MediaMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    thumbnail?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    blurhash?: true;

    @Field(() => Boolean, {nullable:true})
    imageH?: true;

    @Field(() => Boolean, {nullable:true})
    imageW?: true;
}
