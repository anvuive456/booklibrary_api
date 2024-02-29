import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { Ticket } from '../ticket/ticket.model';
import { Media } from '../media/media.model';
import { Price } from '../price/price.model';
import { BookCount } from './book-count.output';

@ObjectType()
export class Book {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    publisher!: string;

    @Field(() => String, {nullable:false})
    author!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false,defaultValue:''})
    epub!: string;

    @Field(() => String, {nullable:true})
    mediaId!: string | null;

    @Field(() => String, {nullable:false})
    priceId!: string;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => [Ticket], {nullable:true})
    tickets?: Array<Ticket>;

    @Field(() => Media, {nullable:true})
    media?: Media | null;

    @Field(() => Price, {nullable:false})
    price?: Price;

    @Field(() => BookCount, {nullable:false})
    _count?: BookCount;
}
