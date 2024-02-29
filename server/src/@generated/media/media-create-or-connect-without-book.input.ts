import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Type } from 'class-transformer';
import { MediaCreateWithoutBookInput } from './media-create-without-book.input';

@InputType()
export class MediaCreateOrConnectWithoutBookInput {

    @Field(() => MediaWhereUniqueInput, {nullable:false})
    @Type(() => MediaWhereUniqueInput)
    where!: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => MediaCreateWithoutBookInput, {nullable:false})
    @Type(() => MediaCreateWithoutBookInput)
    create!: MediaCreateWithoutBookInput;
}
