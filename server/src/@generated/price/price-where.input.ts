import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPriceUnitFilter } from '../prisma/enum-price-unit-filter.input';
import { BookListRelationFilter } from '../book/book-list-relation-filter.input';

@InputType()
export class PriceWhereInput {

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    AND?: Array<PriceWhereInput>;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    OR?: Array<PriceWhereInput>;

    @Field(() => [PriceWhereInput], {nullable:true})
    @Type(() => PriceWhereInput)
    NOT?: Array<PriceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    value?: DecimalFilter;

    @Field(() => EnumPriceUnitFilter, {nullable:true})
    unit?: EnumPriceUnitFilter;

    @Field(() => BookListRelationFilter, {nullable:true})
    @Type(() => BookListRelationFilter)
    book?: BookListRelationFilter;
}
