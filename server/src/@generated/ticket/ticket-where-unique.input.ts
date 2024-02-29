import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketBookIdUserIdCompoundUniqueInput } from './ticket-book-id-user-id-compound-unique.input';
import { TicketWhereInput } from './ticket-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BookRelationFilter } from '../book/book-relation-filter.input';
import { Type } from 'class-transformer';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class TicketWhereUniqueInput {

    @Field(() => String, {nullable:true})
    bookId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => TicketBookIdUserIdCompoundUniqueInput, {nullable:true})
    bookId_userId?: TicketBookIdUserIdCompoundUniqueInput;

    @Field(() => [TicketWhereInput], {nullable:true})
    AND?: Array<TicketWhereInput>;

    @Field(() => [TicketWhereInput], {nullable:true})
    OR?: Array<TicketWhereInput>;

    @Field(() => [TicketWhereInput], {nullable:true})
    NOT?: Array<TicketWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    rentDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    returnDate?: DateTimeFilter;

    @Field(() => BookRelationFilter, {nullable:true})
    @Type(() => BookRelationFilter)
    book?: BookRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
