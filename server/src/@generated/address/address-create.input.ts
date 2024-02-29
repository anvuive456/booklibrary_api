import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateNestedManyWithoutAddressInput } from '../profile/profile-create-nested-many-without-address.input';

@InputType()
export class AddressCreateInput {

    @Field(() => String, {nullable:true})
    street?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    province?: string;

    @Field(() => ProfileCreateNestedManyWithoutAddressInput, {nullable:true})
    profile?: ProfileCreateNestedManyWithoutAddressInput;
}
