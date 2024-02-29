import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMediaArgs {

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;
}
