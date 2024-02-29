import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BookRelationFilter } from '../book/book-relation-filter.input';
import { Type } from 'class-transformer';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class TicketWhereInput {

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

    @Field(() => StringFilter, {nullable:true})
    bookId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => BookRelationFilter, {nullable:true})
    @Type(() => BookRelationFilter)
    book?: BookRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
