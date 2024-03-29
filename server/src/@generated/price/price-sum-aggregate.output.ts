import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PriceSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    value?: Decimal;
}
