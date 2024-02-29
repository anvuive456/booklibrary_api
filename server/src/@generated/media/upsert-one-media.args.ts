import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Type } from 'class-transformer';
import { MediaCreateInput } from './media-create.input';
import { MediaUpdateInput } from './media-update.input';

@ArgsType()
export class UpsertOneMediaArgs {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => MediaCreateInput, {nullable:false})
    @Type(() => MediaCreateInput)
    create!: MediaCreateInput;

    @Field(() => MediaUpdateInput, {nullable:false})
    @Type(() => MediaUpdateInput)
    update!: MediaUpdateInput;
}
