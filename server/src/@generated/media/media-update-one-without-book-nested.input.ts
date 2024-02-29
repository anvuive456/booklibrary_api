import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutBookInput } from './media-create-without-book.input';
import { Type } from 'class-transformer';
import { MediaCreateOrConnectWithoutBookInput } from './media-create-or-connect-without-book.input';
import { MediaUpsertWithoutBookInput } from './media-upsert-without-book.input';
import { MediaWhereInput } from './media-where.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { MediaUpdateToOneWithWhereWithoutBookInput } from './media-update-to-one-with-where-without-book.input';

@InputType()
export class MediaUpdateOneWithoutBookNestedInput {

    @Field(() => MediaCreateWithoutBookInput, {nullable:true})
    @Type(() => MediaCreateWithoutBookInput)
    create?: MediaCreateWithoutBookInput;

    @Field(() => MediaCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutBookInput)
    connectOrCreate?: MediaCreateOrConnectWithoutBookInput;

    @Field(() => MediaUpsertWithoutBookInput, {nullable:true})
    @Type(() => MediaUpsertWithoutBookInput)
    upsert?: MediaUpsertWithoutBookInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    disconnect?: MediaWhereInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    delete?: MediaWhereInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => MediaUpdateToOneWithWhereWithoutBookInput, {nullable:true})
    @Type(() => MediaUpdateToOneWithWhereWithoutBookInput)
    update?: MediaUpdateToOneWithWhereWithoutBookInput;
}
