import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceWhereInput } from './price-where.input';
import { Type } from 'class-transformer';
import { PriceUpdateWithoutBookInput } from './price-update-without-book.input';

@InputType()
export class PriceUpdateToOneWithWhereWithoutBookInput {

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    where?: PriceWhereInput;

    @Field(() => PriceUpdateWithoutBookInput, {nullable:false})
    @Type(() => PriceUpdateWithoutBookInput)
    data!: PriceUpdateWithoutBookInput;
}
