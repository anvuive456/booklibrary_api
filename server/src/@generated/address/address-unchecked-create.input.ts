import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileUncheckedCreateNestedManyWithoutAddressInput } from '../profile/profile-unchecked-create-nested-many-without-address.input';

@InputType()
export class AddressUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => ProfileUncheckedCreateNestedManyWithoutAddressInput, {nullable:true})
    profile?: ProfileUncheckedCreateNestedManyWithoutAddressInput;
}
