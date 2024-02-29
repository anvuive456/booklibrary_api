import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUpdateWithoutMediaInput } from './book-update-without-media.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutMediaInput } from './book-create-without-media.input';
import { BookWhereInput } from './book-where.input';

@InputType()
export class BookUpsertWithoutMediaInput {

    @Field(() => BookUpdateWithoutMediaInput, {nullable:false})
    @Type(() => BookUpdateWithoutMediaInput)
    update!: BookUpdateWithoutMediaInput;

    @Field(() => BookCreateWithoutMediaInput, {nullable:false})
    @Type(() => BookCreateWithoutMediaInput)
    create!: BookCreateWithoutMediaInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    where?: BookWhereInput;
}
