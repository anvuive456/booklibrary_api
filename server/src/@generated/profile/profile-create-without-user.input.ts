import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateNestedOneWithoutProfileInput } from '../media/media-create-nested-one-without-profile.input';
import { AddressCreateNestedOneWithoutProfileInput } from '../address/address-create-nested-one-without-profile.input';

@InputType()
export class ProfileCreateWithoutUserInput {

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

    @Field(() => MediaCreateNestedOneWithoutProfileInput, {nullable:false})
    media!: MediaCreateNestedOneWithoutProfileInput;

    @Field(() => AddressCreateNestedOneWithoutProfileInput, {nullable:true})
    address?: AddressCreateNestedOneWithoutProfileInput;
}
