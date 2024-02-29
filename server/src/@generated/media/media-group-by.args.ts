import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { Type } from 'class-transformer';
import { MediaOrderByWithAggregationInput } from './media-order-by-with-aggregation.input';
import { MediaScalarFieldEnum } from './media-scalar-field.enum';
import { MediaScalarWhereWithAggregatesInput } from './media-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MediaCountAggregateInput } from './media-count-aggregate.input';
import { MediaAvgAggregateInput } from './media-avg-aggregate.input';
import { MediaSumAggregateInput } from './media-sum-aggregate.input';
import { MediaMinAggregateInput } from './media-min-aggregate.input';
import { MediaMaxAggregateInput } from './media-max-aggregate.input';

@ArgsType()
export class MediaGroupByArgs {

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;

    @Field(() => [MediaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithAggregationInput>;

    @Field(() => [MediaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MediaScalarFieldEnum>;

    @Field(() => MediaScalarWhereWithAggregatesInput, {nullable:true})
    having?: MediaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MediaCountAggregateInput, {nullable:true})
    _count?: MediaCountAggregateInput;

    @Field(() => MediaAvgAggregateInput, {nullable:true})
    _avg?: MediaAvgAggregateInput;

    @Field(() => MediaSumAggregateInput, {nullable:true})
    _sum?: MediaSumAggregateInput;

    @Field(() => MediaMinAggregateInput, {nullable:true})
    _min?: MediaMinAggregateInput;

    @Field(() => MediaMaxAggregateInput, {nullable:true})
    _max?: MediaMaxAggregateInput;
}
