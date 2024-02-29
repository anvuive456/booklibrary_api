import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { Type } from 'class-transformer';
import { PriceCreateWithoutBookInput } from './price-create-without-book.input';

@InputType()
export class PriceCreateOrConnectWithoutBookInput {

    @Field(() => PriceWhereUniqueInput, {nullable:false})
    @Type(() => PriceWhereUniqueInput)
    where!: Prisma.AtLeast<PriceWhereUniqueInput, 'id'>;

    @Field(() => PriceCreateWithoutBookInput, {nullable:false})
    @Type(() => PriceCreateWithoutBookInput)
    create!: PriceCreateWithoutBookInput;
}
