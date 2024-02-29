import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { TicketUpdateManyWithoutUserNestedInput } from '../ticket/ticket-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutProfileInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => TicketUpdateManyWithoutUserNestedInput, {nullable:true})
    tickets?: TicketUpdateManyWithoutUserNestedInput;
}
