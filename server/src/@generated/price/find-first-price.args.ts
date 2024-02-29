import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PriceWhereInput } from './price-where.input';
import { Type } from 'class-transformer';
import { PriceOrderByWithRelationAndSearchRelevanceInput } from './price-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { PriceWhereUniqueInput } from './price-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PriceScalarFieldEnum } from './price-scalar-field.enum';

@ArgsType()
export class FindFirstPriceArgs {

    @Field(() => PriceWhereInput, {nullable:true})
    @Type(() => PriceWhereInput)
    where?: PriceWhereInput;

    @Field(() => [PriceOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    @Type(() => PriceOrderByWithRelationAndSearchRelevanceInput)
    orderBy?: Array<PriceOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PriceWhereUniqueInput, {nullable:true})
    @Type(() => PriceWhereUniqueInput)
    cursor?: Prisma.AtLeast<PriceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PriceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PriceScalarFieldEnum>;
}
