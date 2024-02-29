import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AddressScalarWhereWithAggregatesInput {

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    street?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    country?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    state?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    city?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    province?: StringWithAggregatesFilter;
}
