import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import { AddressCreateNestedOneWithoutProfileInput } from '../address/address-create-nested-one-without-profile.input';

@InputType()
export class ProfileCreateWithoutMediaInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProfileInput;

    @Field(() => AddressCreateNestedOneWithoutProfileInput, {nullable:true})
    address?: AddressCreateNestedOneWithoutProfileInput;
}
