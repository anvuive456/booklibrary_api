import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByRelationAggregateInput } from '../profile/profile-order-by-relation-aggregate.input';
import { AddressOrderByRelevanceInput } from './address-order-by-relevance.input';

@InputType()
export class AddressOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    street?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    province?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByRelationAggregateInput, {nullable:true})
    profile?: ProfileOrderByRelationAggregateInput;

    @Field(() => AddressOrderByRelevanceInput, {nullable:true})
    _relevance?: AddressOrderByRelevanceInput;
}
