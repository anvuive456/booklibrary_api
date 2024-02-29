import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaUpdateWithoutProfileInput } from './media-update-without-profile.input';
import { Type } from 'class-transformer';
import { MediaCreateWithoutProfileInput } from './media-create-without-profile.input';
import { MediaWhereInput } from './media-where.input';

@InputType()
export class MediaUpsertWithoutProfileInput {

    @Field(() => MediaUpdateWithoutProfileInput, {nullable:false})
    @Type(() => MediaUpdateWithoutProfileInput)
    update!: MediaUpdateWithoutProfileInput;

    @Field(() => MediaCreateWithoutProfileInput, {nullable:false})
    @Type(() => MediaCreateWithoutProfileInput)
    create!: MediaCreateWithoutProfileInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;
}
