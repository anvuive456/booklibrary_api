import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileListRelationFilter } from '../profile/profile-list-relation-filter.input';

@InputType()
export class AddressWhereInput {

    @Field(() => [AddressWhereInput], {nullable:true})
    AND?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    OR?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    NOT?: Array<AddressWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
