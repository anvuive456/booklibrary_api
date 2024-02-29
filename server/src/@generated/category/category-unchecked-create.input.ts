import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUncheckedCreateNestedManyWithoutCategoriesInput } from '../book/book-unchecked-create-nested-many-without-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => BookUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    @Type(() => BookUncheckedCreateNestedManyWithoutCategoriesInput)
    books?: BookUncheckedCreateNestedManyWithoutCategoriesInput;
}
