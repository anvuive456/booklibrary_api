import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { MediaOrderByWithRelationAndSearchRelevanceInput } from '../media/media-order-by-with-relation-and-search-relevance.input';
import { AddressOrderByWithRelationAndSearchRelevanceInput } from '../address/address-order-by-with-relation-and-search-relevance.input';
import { ProfileOrderByRelevanceInput } from './profile-order-by-relevance.input';

@InputType()
export class ProfileOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mediaId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    addressId?: SortOrderInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MediaOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    media?: MediaOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => AddressOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    address?: AddressOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => ProfileOrderByRelevanceInput, {nullable:true})
    _relevance?: ProfileOrderByRelevanceInput;
}
