import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateManyWithoutBooksNestedInput } from '../category/category-update-many-without-books-nested.input';
import { TicketUpdateManyWithoutBookNestedInput } from '../ticket/ticket-update-many-without-book-nested.input';
import { PriceUpdateOneRequiredWithoutBookNestedInput } from '../price/price-update-one-required-without-book-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class BookUpdateWithoutMediaInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    publisher?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    author?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    epub?: StringFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateManyWithoutBooksNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutBooksNestedInput;

    @Field(() => TicketUpdateManyWithoutBookNestedInput, {nullable:true})
    tickets?: TicketUpdateManyWithoutBookNestedInput;

    @Field(() => PriceUpdateOneRequiredWithoutBookNestedInput, {nullable:true})
    @Type(() => PriceUpdateOneRequiredWithoutBookNestedInput)
    price?: PriceUpdateOneRequiredWithoutBookNestedInput;
}
