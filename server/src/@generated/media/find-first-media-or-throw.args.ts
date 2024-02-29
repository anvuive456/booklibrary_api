import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { Type } from 'class-transformer';
import { MediaOrderByWithRelationAndSearchRelevanceInput } from './media-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { MediaWhereUniqueInput } from './media-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MediaScalarFieldEnum } from './media-scalar-field.enum';

@ArgsType()
export class FindFirstMediaOrThrowArgs {

    @Field(() => MediaWhereInput, {nullable:true})
    @Type(() => MediaWhereInput)
    where?: MediaWhereInput;

    @Field(() => [MediaOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MediaOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MediaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MediaWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MediaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MediaScalarFieldEnum>;
}
