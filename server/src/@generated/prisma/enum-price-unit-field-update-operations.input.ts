import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PriceUnit } from './price-unit.enum';

@InputType()
export class EnumPriceUnitFieldUpdateOperationsInput {

    @Field(() => PriceUnit, {nullable:true})
    set?: keyof typeof PriceUnit;
}
