import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaCreateWithoutBookInput } from './media-create-without-book.input';
import { Type } from 'class-transformer';
import { MediaCreateOrConnectWithoutBookInput } from './media-create-or-connect-without-book.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';

@InputType()
export class MediaCreateNestedOneWithoutBookInput {

    @Field(() => MediaCreateWithoutBookInput, {nullable:true})
    @Type(() => MediaCreateWithoutBookInput)
    create?: MediaCreateWithoutBookInput;

    @Field(() => MediaCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => MediaCreateOrConnectWithoutBookInput)
    connectOrCreate?: MediaCreateOrConnectWithoutBookInput;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    @Type(() => MediaWhereUniqueInput)
    connect?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;
}
