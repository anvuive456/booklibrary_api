import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateWithoutMediaInput } from './profile-create-without-media.input';
import { Type } from 'class-transformer';
import { ProfileCreateOrConnectWithoutMediaInput } from './profile-create-or-connect-without-media.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateNestedOneWithoutMediaInput {

    @Field(() => ProfileCreateWithoutMediaInput, {nullable:true})
    @Type(() => ProfileCreateWithoutMediaInput)
    create?: ProfileCreateWithoutMediaInput;

    @Field(() => ProfileCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => ProfileCreateOrConnectWithoutMediaInput)
    connectOrCreate?: ProfileCreateOrConnectWithoutMediaInput;

    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    @Type(() => ProfileWhereUniqueInput)
    connect?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>;
}
