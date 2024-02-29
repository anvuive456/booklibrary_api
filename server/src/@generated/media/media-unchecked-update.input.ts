import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ProfileUncheckedUpdateOneWithoutMediaNestedInput } from '../profile/profile-unchecked-update-one-without-media-nested.input';
import { BookUncheckedUpdateOneWithoutMediaNestedInput } from '../book/book-unchecked-update-one-without-media-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class MediaUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    blurhash?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    imageH?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    imageW?: IntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => ProfileUncheckedUpdateOneWithoutMediaNestedInput, {nullable:true})
    profile?: ProfileUncheckedUpdateOneWithoutMediaNestedInput;

    @Field(() => BookUncheckedUpdateOneWithoutMediaNestedInput, {nullable:true})
    @Type(() => BookUncheckedUpdateOneWithoutMediaNestedInput)
    book?: BookUncheckedUpdateOneWithoutMediaNestedInput;
}
