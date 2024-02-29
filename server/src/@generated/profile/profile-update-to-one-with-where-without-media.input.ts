import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileUpdateWithoutMediaInput } from './profile-update-without-media.input';

@InputType()
export class ProfileUpdateToOneWithWhereWithoutMediaInput {

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => ProfileUpdateWithoutMediaInput, {nullable:false})
    @Type(() => ProfileUpdateWithoutMediaInput)
    data!: ProfileUpdateWithoutMediaInput;
}
