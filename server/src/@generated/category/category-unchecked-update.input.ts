import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookUncheckedUpdateManyWithoutCategoriesNestedInput } from '../book/book-unchecked-update-many-without-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => BookUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    @Type(() => BookUncheckedUpdateManyWithoutCategoriesNestedInput)
    books?: BookUncheckedUpdateManyWithoutCategoriesNestedInput;
}
