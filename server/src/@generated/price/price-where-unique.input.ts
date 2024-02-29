import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceWhereInput } from './price-where.input';
import { Type } from 'class-transformer';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPriceUnitFilter } from '../prisma/enum-price-unit-filter.input';
import { BookListRelationFilter } from '../book/book-list-relation-filter.input';

@InputType()
export class PriceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    AND?: Array<PriceWhereInput>;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    OR?: Array<PriceWhereInput>;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    NOT?: Array<PriceWhereInput>;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    value?: DecimalFilter;

    @Field(() => EnumPriceUnitFilter, {nullable:true})
    unit?: EnumPriceUnitFilter;

    @Field(() => BookListRelationFilter, {nullable:true})
    @Type(() => BookListRelationFilter)
    book?: BookListRelationFilter;
}
