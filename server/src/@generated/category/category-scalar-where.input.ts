import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CategoryScalarWhereInput {

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    AND?: Array<CategoryScalarWhereInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    OR?: Array<CategoryScalarWhereInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;
}
