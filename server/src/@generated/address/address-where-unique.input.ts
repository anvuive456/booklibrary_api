import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileListRelationFilter } from '../profile/profile-list-relation-filter.input';

@InputType()
export class AddressWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AddressWhereInput], {nullable:true})
    AND?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    OR?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    NOT?: Array<AddressWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    street?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    province?: StringFilter;

    @Field(() => ProfileListRelationFilter, {nullable:true})
    profile?: ProfileListRelationFilter;
}
