import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookOrderByWithRelationInput } from '../book/book-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class TicketOrderByWithRelationInput {

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

    @Field(() => BookOrderByWithRelationInput, {nullable:true})
    @Type(() => BookOrderByWithRelationInput)
    book?: BookOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;
}
