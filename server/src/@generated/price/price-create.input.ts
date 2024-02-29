import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { PriceUnit } from '../prisma/price-unit.enum';
import { BookCreateNestedManyWithoutPriceInput } from '../book/book-create-nested-many-without-price.input';

@InputType()
export class PriceCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    value?: Decimal;

    @Field(() => PriceUnit, {nullable:true})
    unit?: keyof typeof PriceUnit;

    @Field(() => BookCreateNestedManyWithoutPriceInput, {nullable:true})
    @Type(() => BookCreateNestedManyWithoutPriceInput)
    book?: BookCreateNestedManyWithoutPriceInput;
}
