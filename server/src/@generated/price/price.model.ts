import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { PriceUnit } from '../prisma/price-unit.enum';
import { Book } from '../book/book.model';
import { PriceCount } from './price-count.output';

@ObjectType()
export class Price {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0})
    value!: Decimal;

    @Field(() => PriceUnit, {nullable:false,defaultValue:'VND'})
    unit!: keyof typeof PriceUnit;

    @Field(() => [Book], {nullable:true})
    book?: Array<Book>;

    @Field(() => PriceCount, {nullable:false})
    _count?: PriceCount;
}
