import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ProfileScalarWhereInput {

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    AND?: Array<ProfileScalarWhereInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    OR?: Array<ProfileScalarWhereInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    NOT?: Array<ProfileScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

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

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    mediaId?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    addressId?: IntNullableFilter;
}
