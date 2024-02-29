import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateManyAddressInput } from './profile-create-many-address.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileCreateManyAddressInputEnvelope {

    @Field(() => [ProfileCreateManyAddressInput], {nullable:false})
    @Type(() => ProfileCreateManyAddressInput)
    data!: Array<ProfileCreateManyAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
