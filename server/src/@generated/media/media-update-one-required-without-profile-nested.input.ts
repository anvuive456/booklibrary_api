import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutProfileInput } from './media-create-without-profile.input';
import { Type } from 'class-transformer';
import { MediaCreateOrConnectWithoutProfileInput } from './media-create-or-connect-without-profile.input';
import { MediaUpsertWithoutProfileInput } from './media-upsert-without-profile.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { MediaUpdateToOneWithWhereWithoutProfileInput } from './media-update-to-one-with-where-without-profile.input';

@InputType()
export class MediaUpdateOneRequiredWithoutProfileNestedInput {

    @Field(() => MediaCreateWithoutProfileInput, {nullable:true})
    @Type(() => MediaCreateWithoutProfileInput)
    create?: MediaCreateWithoutProfileInput;

    @Field(() => MediaCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutProfileInput)
    connectOrCreate?: MediaCreateOrConnectWithoutProfileInput;

    @Field(() => MediaUpsertWithoutProfileInput, {nullable:true})
    @Type(() => MediaUpsertWithoutProfileInput)
    upsert?: MediaUpsertWithoutProfileInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => MediaUpdateToOneWithWhereWithoutProfileInput, {nullable:true})
    @Type(() => MediaUpdateToOneWithWhereWithoutProfileInput)
    update?: MediaUpdateToOneWithWhereWithoutProfileInput;
}
