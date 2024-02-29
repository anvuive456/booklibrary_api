import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ProfileUpdateOneWithoutMediaNestedInput } from '../profile/profile-update-one-without-media-nested.input';
import { BookUpdateOneWithoutMediaNestedInput } from '../book/book-update-one-without-media-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class MediaUpdateInput {

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

    @Field(() => ProfileUpdateOneWithoutMediaNestedInput, {nullable:true})
    profile?: ProfileUpdateOneWithoutMediaNestedInput;

    @Field(() => BookUpdateOneWithoutMediaNestedInput, {nullable:true})
    @Type(() => BookUpdateOneWithoutMediaNestedInput)
    book?: BookUpdateOneWithoutMediaNestedInput;
}
