import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumPriceUnitFieldUpdateOperationsInput } from '../prisma/enum-price-unit-field-update-operations.input';
import { BookUpdateManyWithoutPriceNestedInput } from '../book/book-update-many-without-price-nested.input';

@InputType()
export class PriceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    value?: DecimalFieldUpdateOperationsInput;

    @Field(() => EnumPriceUnitFieldUpdateOperationsInput, {nullable:true})
    unit?: EnumPriceUnitFieldUpdateOperationsInput;

    @Field(() => BookUpdateManyWithoutPriceNestedInput, {nullable:true})
    @Type(() => BookUpdateManyWithoutPriceNestedInput)
    book?: BookUpdateManyWithoutPriceNestedInput;
}
