import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutAddressInput } from './profile-create-without-address.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutAddressInput } from './profile-create-or-connect-without-address.input';
import { ProfileCreateManyAddressInputEnvelope } from './profile-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileUncheckedCreateNestedManyWithoutAddressInput {

    @Field(() => [ProfileCreateWithoutAddressInput], {nullable:true})
    @Type(() => ProfileCreateWithoutAddressInput)
    create?: Array<ProfileCreateWithoutAddressInput>;

    @Field(() => [ProfileCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutAddressInput>;

    @Field(() => ProfileCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => ProfileCreateManyAddressInputEnvelope)
    createMany?: ProfileCreateManyAddressInputEnvelope;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>>;
}
