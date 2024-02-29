import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceWhereInput } from './price-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PriceRelationFilter {

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    is?: PriceWhereInput;

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    isNot?: PriceWhereInput;
}
