import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMediaArgs {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}
