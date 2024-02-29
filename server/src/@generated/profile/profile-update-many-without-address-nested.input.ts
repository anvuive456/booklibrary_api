import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutAddressInput } from './profile-create-without-address.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutAddressInput } from './profile-create-or-connect-without-address.input';
import { ProfileUpsertWithWhereUniqueWithoutAddressInput } from './profile-upsert-with-where-unique-without-address.input';
import { ProfileCreateManyAddressInputEnvelope } from './profile-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateWithWhereUniqueWithoutAddressInput } from './profile-update-with-where-unique-without-address.input';
import { ProfileUpdateManyWithWhereWithoutAddressInput } from './profile-update-many-with-where-without-address.input';
import { ProfileScalarWhereInput } from './profile-scalar-where.input';

@InputType()
export class ProfileUpdateManyWithoutAddressNestedInput {

    @Field(() => [ProfileCreateWithoutAddressInput], {nullable:true})
    @Type(() => ProfileCreateWithoutAddressInput)
    create?: Array<ProfileCreateWithoutAddressInput>;

    @Field(() => [ProfileCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<ProfileCreateOrConnectWithoutAddressInput>;

    @Field(() => [ProfileUpsertWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => ProfileUpsertWithWhereUniqueWithoutAddressInput)
    upsert?: Array<ProfileUpsertWithWhereUniqueWithoutAddressInput>;

    @Field(() => ProfileCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => ProfileCreateManyAddressInputEnvelope)
    createMany?: ProfileCreateManyAddressInputEnvelope;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>>;

    @Field(() => [ProfileWhereUniqueInput], {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>>;

    @Field(() => [ProfileUpdateWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => ProfileUpdateWithWhereUniqueWithoutAddressInput)
    update?: Array<ProfileUpdateWithWhereUniqueWithoutAddressInput>;

    @Field(() => [ProfileUpdateManyWithWhereWithoutAddressInput], {nullable:true})
    @Type(() => ProfileUpdateManyWithWhereWithoutAddressInput)
    updateMany?: Array<ProfileUpdateManyWithWhereWithoutAddressInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    @Type(() => ProfileScalarWhereInput)
    deleteMany?: Array<ProfileScalarWhereInput>;
}
