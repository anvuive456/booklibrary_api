import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Book } from '../book/book.model';
import { User } from '../user/user.model';

@ObjectType()
export class Ticket {

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    rentDate!: Date;

    @Field(() => Date, {nullable:false})
    returnDate!: Date;

    @Field(() => String, {nullable:false})
    bookId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Book, {nullable:false})
    book?: Book;

    @Field(() => User, {nullable:false})
    user?: User;
}
