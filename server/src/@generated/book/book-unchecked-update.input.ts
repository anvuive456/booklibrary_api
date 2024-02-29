import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutBooksNestedInput } from '../category/category-unchecked-update-many-without-books-nested.input';
import { TicketUncheckedUpdateManyWithoutBookNestedInput } from '../ticket/ticket-unchecked-update-many-without-book-nested.input';

@InputType()
export class BookUncheckedUpdateInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mediaId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    priceId?: StringFieldUpdateOperationsInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutBooksNestedInput, {nullable:true})
    categories?: CategoryUncheckedUpdateManyWithoutBooksNestedInput;

    @Field(() => TicketUncheckedUpdateManyWithoutBookNestedInput, {nullable:true})
    tickets?: TicketUncheckedUpdateManyWithoutBookNestedInput;
}
