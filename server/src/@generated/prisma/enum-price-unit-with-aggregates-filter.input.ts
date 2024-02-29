import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceUnit } from './price-unit.enum';
import { NestedEnumPriceUnitWithAggregatesFilter } from './nested-enum-price-unit-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPriceUnitFilter } from './nested-enum-price-unit-filter.input';

@InputType()
export class EnumPriceUnitWithAggregatesFilter {

    @Field(() => PriceUnit, {nullable:true})
    equals?: keyof typeof PriceUnit;

    @Field(() => [PriceUnit], {nullable:true})
    in?: Array<keyof typeof PriceUnit>;

    @Field(() => [PriceUnit], {nullable:true})
    notIn?: Array<keyof typeof PriceUnit>;

    @Field(() => NestedEnumPriceUnitWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPriceUnitWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPriceUnitFilter, {nullable:true})
    _min?: NestedEnumPriceUnitFilter;

    @Field(() => NestedEnumPriceUnitFilter, {nullable:true})
    _max?: NestedEnumPriceUnitFilter;
}
