import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutMediaInput } from './profile-create-without-media.input';

@InputType()
export class ProfileCreateOrConnectWithoutMediaInput {

    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    @Type(() => ProfileWhereUniqueInput)
    where!: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'email' | 'userId' | 'mediaId'>;

    @Field(() => ProfileCreateWithoutMediaInput, {nullable:false})
    @Type(() => ProfileCreateWithoutMediaInput)
    create!: ProfileCreateWithoutMediaInput;
}
