import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateWithoutMediaInput } from './book-create-without-media.input';
import { Type } from 'class-transformer';
import { BookCreateOrConnectWithoutMediaInput } from './book-create-or-connect-without-media.input';
import { BookUpsertWithoutMediaInput } from './book-upsert-without-media.input';
import { BookWhereInput } from './book-where.input';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { BookUpdateToOneWithWhereWithoutMediaInput } from './book-update-to-one-with-where-without-media.input';

@InputType()
export class BookUpdateOneWithoutMediaNestedInput {

    @Field(() => BookCreateWithoutMediaInput, {nullable:true})
    @Type(() => BookCreateWithoutMediaInput)
    create?: BookCreateWithoutMediaInput;

    @Field(() => BookCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => BookCreateOrConnectWithoutMediaInput)
    connectOrCreate?: BookCreateOrConnectWithoutMediaInput;

    @Field(() => BookUpsertWithoutMediaInput, {nullable:true})
    @Type(() => BookUpsertWithoutMediaInput)
    upsert?: BookUpsertWithoutMediaInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    disconnect?: BookWhereInput;

    @Field(() => BookWhereInput, {nullable:true})
    @Type(() => BookWhereInput)
    delete?: BookWhereInput;

    @Field(() => BookWhereUniqueInput, {nullable:true})
    @Type(() => BookWhereUniqueInput)
    connect?: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'mediaId'>;

    @Field(() => BookUpdateToOneWithWhereWithoutMediaInput, {nullable:true})
    @Type(() => BookUpdateToOneWithWhereWithoutMediaInput)
    update?: BookUpdateToOneWithWhereWithoutMediaInput;
}
