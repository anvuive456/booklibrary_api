import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { EnumPriceUnitFieldUpdateOperationsInput } from '../prisma/enum-price-unit-field-update-operations.input';
import { BookUncheckedUpdateManyWithoutPriceNestedInput } from '../book/book-unchecked-update-many-without-price-nested.input';

@InputType()
export class PriceUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    value?: DecimalFieldUpdateOperationsInput;

    @Field(() => EnumPriceUnitFieldUpdateOperationsInput, {nullable:true})
    unit?: EnumPriceUnitFieldUpdateOperationsInput;

    @Field(() => BookUncheckedUpdateManyWithoutPriceNestedInput, {nullable:true})
    @Type(() => BookUncheckedUpdateManyWithoutPriceNestedInput)
    book?: BookUncheckedUpdateManyWithoutPriceNestedInput;
}
