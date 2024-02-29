import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { Type } from 'class-transformer';
import { MediaUpdateWithoutBookInput } from './media-update-without-book.input';

@InputType()
export class MediaUpdateToOneWithWhereWithoutBookInput {

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;

    @Field(() => MediaUpdateWithoutBookInput, {nullable:false})
    @Type(() => MediaUpdateWithoutBookInput)
    data!: MediaUpdateWithoutBookInput;
}
