import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Book } from '../book/book.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [Book], {nullable:true})
    books?: Array<Book>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
