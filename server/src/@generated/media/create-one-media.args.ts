import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaCreateInput } from './media-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMediaArgs {

    @Field(() => MediaCreateInput, {nullable:false})
    @Type(() => MediaCreateInput)
    data!: MediaCreateInput;
}
