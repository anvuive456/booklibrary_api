import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutTicketsNestedInput } from '../user/user-update-one-required-without-tickets-nested.input';

@InputType()
export class TicketUpdateWithoutBookInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    rentDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    returnDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutTicketsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput;
}
