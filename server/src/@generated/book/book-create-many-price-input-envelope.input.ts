import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookCreateManyPriceInput } from './book-create-many-price.input';
import { Type } from 'class-transformer';

@InputType()
export class BookCreateManyPriceInputEnvelope {

    @Field(() => [BookCreateManyPriceInput], {nullable:false})
    @Type(() => BookCreateManyPriceInput)
    data!: Array<BookCreateManyPriceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
