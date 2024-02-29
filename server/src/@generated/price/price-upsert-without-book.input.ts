import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceUpdateWithoutBookInput } from './price-update-without-book.input';
import { Type } from 'class-transformer';
import { PriceCreateWithoutBookInput } from './price-create-without-book.input';
import { PriceWhereInput } from './price-where.input';

@InputType()
export class PriceUpsertWithoutBookInput {

    @Field(() => PriceUpdateWithoutBookInput, {nullable:false})
    @Type(() => PriceUpdateWithoutBookInput)
    update!: PriceUpdateWithoutBookInput;

    @Field(() => PriceCreateWithoutBookInput, {nullable:false})
    @Type(() => PriceCreateWithoutBookInput)
    create!: PriceCreateWithoutBookInput;

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    where?: PriceWhereInput;
}
