import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutMediaInput } from './profile-update-without-media.input';
import { Type } from 'class-transformer';
import { ProfileCreateWithoutMediaInput } from './profile-create-without-media.input';
import { ProfileWhereInput } from './profile-where.input';

@InputType()
export class ProfileUpsertWithoutMediaInput {

    @Field(() => ProfileUpdateWithoutMediaInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutMediaInput)
    update!: ProfileUpdateWithoutMediaInput;

    @Field(() => ProfileCreateWithoutMediaInput, {nullable:false})
    @Type(() => ProfileCreateWithoutMediaInput)
    create!: ProfileCreateWithoutMediaInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;
}
