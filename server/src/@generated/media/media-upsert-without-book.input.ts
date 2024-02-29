import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaUpdateWithoutBookInput } from './media-update-without-book.input';
import { Type } from 'class-transformer';
import { MediaCreateWithoutBookInput } from './media-create-without-book.input';
import { MediaWhereInput } from './media-where.input';

@InputType()
export class MediaUpsertWithoutBookInput {

    @Field(() => MediaUpdateWithoutBookInput, {nullable:false})
    @Type(() => MediaUpdateWithoutBookInput)
    update!: MediaUpdateWithoutBookInput;

    @Field(() => MediaCreateWithoutBookInput, {nullable:false})
    @Type(() => MediaCreateWithoutBookInput)
    create!: MediaCreateWithoutBookInput;

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;
}
