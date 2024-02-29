import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    street?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    province?: true;
}
