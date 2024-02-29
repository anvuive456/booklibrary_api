import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceUnit } from './price-unit.enum';
import { NestedEnumPriceUnitFilter } from './nested-enum-price-unit-filter.input';

@InputType()
export class EnumPriceUnitFilter {

    @Field(() => PriceUnit, {nullable:true})
    equals?: keyof typeof PriceUnit;

    @Field(() => [PriceUnit], {nullable:true})
    in?: Array<keyof typeof PriceUnit>;

    @Field(() => [PriceUnit], {nullable:true})
    notIn?: Array<keyof typeof PriceUnit>;

    @Field(() => NestedEnumPriceUnitFilter, {nullable:true})
    not?: NestedEnumPriceUnitFilter;
}
