import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookCountAggregate } from './book-count-aggregate.output';
import { BookMinAggregate } from './book-min-aggregate.output';
import { BookMaxAggregate } from './book-max-aggregate.output';

@ObjectType()
export class BookGroupBy {

    @Field(() => String, {nullable:false})
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
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    epub!: string;

    @Field(() => String, {nullable:true})
    mediaId?: string;

    @Field(() => String, {nullable:false})
    priceId!: string;

    @Field(() => BookCountAggregate, {nullable:true})
    _count?: BookCountAggregate;

    @Field(() => BookMinAggregate, {nullable:true})
    _min?: BookMinAggregate;

    @Field(() => BookMaxAggregate, {nullable:true})
    _max?: BookMaxAggregate;
}
