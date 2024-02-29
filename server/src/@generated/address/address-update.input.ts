import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProfileUpdateManyWithoutAddressNestedInput } from '../profile/profile-update-many-without-address-nested.input';

@InputType()
export class AddressUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    street?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    state?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    province?: StringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateManyWithoutAddressNestedInput, {nullable:true})
    profile?: ProfileUpdateManyWithoutAddressNestedInput;
}
