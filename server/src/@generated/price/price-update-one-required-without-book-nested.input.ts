import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceCreateWithoutBookInput } from './price-create-without-book.input';
import { Type } from 'class-transformer';
import { PriceCreateOrConnectWithoutBookInput } from './price-create-or-connect-without-book.input';
import { PriceUpsertWithoutBookInput } from './price-upsert-without-book.input';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { PriceUpdateToOneWithWhereWithoutBookInput } from './price-update-to-one-with-where-without-book.input';

@InputType()
export class PriceUpdateOneRequiredWithoutBookNestedInput {

    @Field(() => PriceCreateWithoutBookInput, {nullable:true})
    @Type(() => PriceCreateWithoutBookInput)
    create?: PriceCreateWithoutBookInput;

    @Field(() => PriceCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => PriceCreateOrConnectWithoutBookInput)
    connectOrCreate?: PriceCreateOrConnectWithoutBookInput;

    @Field(() => PriceUpsertWithoutBookInput, {nullable:true})
    @Type(() => PriceUpsertWithoutBookInput)
    upsert?: PriceUpsertWithoutBookInput;

    @Field(() => PriceWhereUniqueInput, {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    connect?: Prisma.AtLeast<PriceWhereUniqueInput, 'id'>;

    @Field(() => PriceUpdateToOneWithWhereWithoutBookInput, {nullable:true})
    @Type(() => PriceUpdateToOneWithWhereWithoutBookInput)
    update?: PriceUpdateToOneWithWhereWithoutBookInput;
}
