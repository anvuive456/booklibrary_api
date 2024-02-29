import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaUpdateManyMutationInput } from './media-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MediaWhereInput } from './media-where.input';

@ArgsType()
export class UpdateManyMediaArgs {

    @Field(() => MediaUpdateManyMutationInput, {nullable:false})
    @Type(() => MediaUpdateManyMutationInput)
    data!: MediaUpdateManyMutationInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;
}
