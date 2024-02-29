import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PriceUnit } from '../prisma/price-unit.enum';

@ObjectType()
export class PriceMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    value?: Decimal;

    @Field(() => PriceUnit, {nullable:true})
    unit?: keyof typeof PriceUnit;
}
