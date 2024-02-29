import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaCreateManyInput } from './media-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMediaArgs {

    @Field(() => [MediaCreateManyInput], {nullable:false})
    @Type(() => MediaCreateManyInput)
    data!: Array<MediaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
