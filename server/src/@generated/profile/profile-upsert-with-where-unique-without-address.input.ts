import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutAddressInput } from './profile-update-without-address.input';
import { ProfileCreateWithoutAddressInput } from './profile-create-without-address.input';

@InputType()
export class ProfileUpsertWithWhereUniqueWithoutAddressInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>;

    @Field(() => ProfileUpdateWithoutAddressInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutAddressInput)
    update!: ProfileUpdateWithoutAddressInput;

    @Field(() => ProfileCreateWithoutAddressInput, {nullable:false})
    @Type(() => ProfileCreateWithoutAddressInput)
    create!: ProfileCreateWithoutAddressInput;
}
