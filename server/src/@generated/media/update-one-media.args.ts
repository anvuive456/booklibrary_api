import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaUpdateInput } from './media-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';

@ArgsType()
export class UpdateOneMediaArgs {

    @Field(() => MediaUpdateInput, {nullable:false})
    @Type(() => MediaUpdateInput)
    data!: MediaUpdateInput;

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}
