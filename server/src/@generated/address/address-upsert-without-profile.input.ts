import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutProfileInput } from './address-update-without-profile.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutProfileInput {

    @Field(() => AddressUpdateWithoutProfileInput, {nullable:false})
    @Type(() => AddressUpdateWithoutProfileInput)
    update!: AddressUpdateWithoutProfileInput;

    @Field(() => AddressCreateWithoutProfileInput, {nullable:false})
    @Type(() => AddressCreateWithoutProfileInput)
    create!: AddressCreateWithoutProfileInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
