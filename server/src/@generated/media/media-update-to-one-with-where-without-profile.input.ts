import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { Type } from 'class-transformer';
import { MediaUpdateWithoutProfileInput } from './media-update-without-profile.input';

@InputType()
export class MediaUpdateToOneWithWhereWithoutProfileInput {

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;

    @Field(() => MediaUpdateWithoutProfileInput, {nullable:false})
    @Type(() => MediaUpdateWithoutProfileInput)
    data!: MediaUpdateWithoutProfileInput;
}
