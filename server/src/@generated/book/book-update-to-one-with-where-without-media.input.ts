import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { BookUpdateWithoutMediaInput } from './book-update-without-media.input';

@InputType()
export class BookUpdateToOneWithWhereWithoutMediaInput {

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;

    @Field(() => BookUpdateWithoutMediaInput, {nullable:false})
    @Type(() => BookUpdateWithoutMediaInput)
    data!: BookUpdateWithoutMediaInput;
}
