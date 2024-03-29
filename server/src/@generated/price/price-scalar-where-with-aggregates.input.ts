import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumPriceUnitWithAggregatesFilter } from '../prisma/enum-price-unit-with-aggregates-filter.input';

@InputType()
export class PriceScalarWhereWithAggregatesInput {

    @Field(() => [PriceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PriceScalarWhereWithAggregatesInput)
    AND?: Array<PriceScalarWhereWithAggregatesInput>;

    @Field(() => [PriceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PriceScalarWhereWithAggregatesInput)
    OR?: Array<PriceScalarWhereWithAggregatesInput>;

    @Field(() => [PriceScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PriceScalarWhereWithAggregatesInput)
    NOT?: Array<PriceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    value?: DecimalWithAggregatesFilter;

    @Field(() => EnumPriceUnitWithAggregatesFilter, {nullable:true})
    unit?: EnumPriceUnitWithAggregatesFilter;
}
