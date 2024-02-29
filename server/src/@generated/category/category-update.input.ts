import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BookUpdateManyWithoutCategoriesNestedInput } from '../book/book-update-many-without-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => BookUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    @Type(() => BookUpdateManyWithoutCategoriesNestedInput)
    books?: BookUpdateManyWithoutCategoriesNestedInput;
}
