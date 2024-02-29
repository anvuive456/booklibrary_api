import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookOrderByWithRelationAndSearchRelevanceInput } from '../book/book-order-by-with-relation-and-search-relevance.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { TicketOrderByRelevanceInput } from './ticket-order-by-relevance.input';

@InputType()
export class TicketOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rentDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    returnDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => BookOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    @Type(() => BookOrderByWithRelationAndSearchRelevanceInput)
    book?: BookOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => TicketOrderByRelevanceInput, {nullable:true})
    _relevance?: TicketOrderByRelevanceInput;
}
