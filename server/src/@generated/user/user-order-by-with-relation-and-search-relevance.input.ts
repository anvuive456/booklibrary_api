import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from '../profile/profile-order-by-with-relation-and-search-relevance.input';
import { TicketOrderByRelationAggregateInput } from '../ticket/ticket-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    profile?: ProfileOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => TicketOrderByRelationAggregateInput, {nullable:true})
    tickets?: TicketOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelevanceInput, {nullable:true})
    _relevance?: UserOrderByRelevanceInput;
}
