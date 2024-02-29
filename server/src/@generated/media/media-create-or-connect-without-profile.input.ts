import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Type } from 'class-transformer';
import { MediaCreateWithoutProfileInput } from './media-create-without-profile.input';

@InputType()
export class MediaCreateOrConnectWithoutProfileInput {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => MediaCreateWithoutProfileInput, {nullable:false})
    @Type(() => MediaCreateWithoutProfileInput)
    create!: MediaCreateWithoutProfileInput;
}
