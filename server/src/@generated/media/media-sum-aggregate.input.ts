import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MediaSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    imageH?: true;

    @Field(() => Boolean, {nullable:true})
    imageW?: true;
}
