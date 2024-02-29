import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceCreateWithoutBookInput } from './price-create-without-book.input';
import { Type } from 'class-transformer';
import { PriceCreateOrConnectWithoutBookInput } from './price-create-or-connect-without-book.input';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';

@InputType()
export class PriceCreateNestedOneWithoutBookInput {

    @Field(() => PriceCreateWithoutBookInput, {nullable:true})
    @Type(() => PriceCreateWithoutBookInput)
    create?: PriceCreateWithoutBookInput;

    @Field(() => PriceCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => PriceCreateOrConnectWithoutBookInput)
    connectOrCreate?: PriceCreateOrConnectWithoutBookInput;

    @Field(() => PriceWhereUniqueInput, {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    connect?: Prisma.AtLeast<PriceWhereUniqueInput, 'id'>;
}
