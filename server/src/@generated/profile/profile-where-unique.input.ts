import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { MediaRelationFilter } from '../media/media-relation-filter.input';
import { AddressNullableRelationFilter } from '../address/address-nullable-relation-filter.input';

@InputType()
export class ProfileWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    mediaId?: string;

    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;

    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    addressId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => MediaRelationFilter, {nullable:true})
    media?: MediaRelationFilter;

    @Field(() => AddressNullableRelationFilter, {nullable:true})
    address?: AddressNullableRelationFilter;
}
