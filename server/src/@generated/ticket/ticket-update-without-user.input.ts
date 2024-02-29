import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BookUpdateOneRequiredWithoutTicketsNestedInput } from '../book/book-update-one-required-without-tickets-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    rentDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    returnDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BookUpdateOneRequiredWithoutTicketsNestedInput, {nullable:true})
    @Type(() => BookUpdateOneRequiredWithoutTicketsNestedInput)
    book?: BookUpdateOneRequiredWithoutTicketsNestedInput;
}
