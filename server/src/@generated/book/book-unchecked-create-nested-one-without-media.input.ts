import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutMediaInput } from './book-create-without-media.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutMediaInput } from './book-create-or-connect-without-media.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class BookUncheckedCreateNestedOneWithoutMediaInput {

    @Field(() => BookCreateWithoutMediaInput, {nullable:true})
    @Type(() => BookCreateWithoutMediaInput)
    create?: BookCreateWithoutMediaInput;

    @Field(() => BookCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutMediaInput)
    connectOrCreate?: BookCreateOrConnectWithoutMediaInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;
}
