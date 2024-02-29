import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutProfileInput } from './media-create-without-profile.input';
import { Type } from 'class-transformer';
import { MediaCreateOrConnectWithoutProfileInput } from './media-create-or-connect-without-profile.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';

@InputType()
export class MediaCreateNestedOneWithoutProfileInput {

    @Field(() => MediaCreateWithoutProfileInput, {nullable:true})
    @Type(() => MediaCreateWithoutProfileInput)
    create?: MediaCreateWithoutProfileInput;

    @Field(() => MediaCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutProfileInput)
    connectOrCreate?: MediaCreateOrConnectWithoutProfileInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}
