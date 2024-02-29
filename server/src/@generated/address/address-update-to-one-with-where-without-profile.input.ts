import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutProfileInput } from './address-update-without-profile.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutProfileInput {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => AddressUpdateWithoutProfileInput, {nullable:false})
    @Type(() => AddressUpdateWithoutProfileInput)
    data!: AddressUpdateWithoutProfileInput;
}
