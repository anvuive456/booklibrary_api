import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMediaInput } from './profile-create-without-media.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutMediaInput } from './profile-create-or-connect-without-media.input';
import { ProfileUpsertWithoutMediaInput } from './profile-upsert-without-media.input';
import { ProfileWhereInput } from './profile-where.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { ProfileUpdateToOneWithWhereWithoutMediaInput } from './profile-update-to-one-with-where-without-media.input';

@InputType()
export class ProfileUncheckedUpdateOneWithoutMediaNestedInput {

    @Field(() => ProfileCreateWithoutMediaInput, {nullable:true})
    @Type(() => ProfileCreateWithoutMediaInput)
    create?: ProfileCreateWithoutMediaInput;

    @Field(() => ProfileCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutMediaInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutMediaInput;

    @Field(() => ProfileUpsertWithoutMediaInput, {nullable:true})
    @Type(() => ProfileUpsertWithoutMediaInput)
    upsert?: ProfileUpsertWithoutMediaInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    disconnect?: ProfileWhereInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    delete?: ProfileWhereInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>;

    @Field(() => ProfileUpdateToOneWithWhereWithoutMediaInput, {nullable:true})
    @Type(() => ProfileUpdateToOneWithWhereWithoutMediaInput)
    update?: ProfileUpdateToOneWithWhereWithoutMediaInput;
}
