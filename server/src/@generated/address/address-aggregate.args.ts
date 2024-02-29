import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressOrderByWithRelationAndSearchRelevanceInput } from './address-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressCountAggregateInput } from './address-count-aggregate.input';
import { AddressAvgAggregateInput } from './address-avg-aggregate.input';
import { AddressSumAggregateInput } from './address-sum-aggregate.input';
import { AddressMinAggregateInput } from './address-min-aggregate.input';
import { AddressMaxAggregateInput } from './address-max-aggregate.input';

@ArgsType()
export class AddressAggregateArgs {

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;

    @Field(() => [AddressOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<AddressOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AddressCountAggregateInput, {nullable:true})
    _count?: AddressCountAggregateInput;

    @Field(() => AddressAvgAggregateInput, {nullable:true})
    _avg?: AddressAvgAggregateInput;

    @Field(() => AddressSumAggregateInput, {nullable:true})
    _sum?: AddressSumAggregateInput;

    @Field(() => AddressMinAggregateInput, {nullable:true})
    _min?: AddressMinAggregateInput;

    @Field(() => AddressMaxAggregateInput, {nullable:true})
    _max?: AddressMaxAggregateInput;
}
