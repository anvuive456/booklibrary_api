import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { BookCreateWithoutMediaInput } from './book-create-without-media.input';

@InputType()
export class BookCreateOrConnectWithoutMediaInput {

    @Field(() => BookWhereUniqueInput, {nullable:false})
    @Type(() => BookWhereUniqueInput)
    where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookCreateWithoutMediaInput, {nullable:false})
    @Type(() => BookCreateWithoutMediaInput)
    create!: BookCreateWithoutMediaInput;
}
