import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { AddressCount } from './address-count.output';

@ObjectType()
export class Address {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false,defaultValue:''})
    street!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    country!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    state!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    city!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    province!: string;

    @Field(() => [Profile], {nullable:true})
    profile?: Array<Profile>;

    @Field(() => AddressCount, {nullable:false})
    _count?: AddressCount;
}
