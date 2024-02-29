import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateNestedManyWithoutCategoriesInput } from '../book/book-create-nested-many-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => BookCreateNestedManyWithoutCategoriesInput, {nullable:true})
    @Type(() => BookCreateNestedManyWithoutCategoriesInput)
    books?: BookCreateNestedManyWithoutCategoriesInput;
}
