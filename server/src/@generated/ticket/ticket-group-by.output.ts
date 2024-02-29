import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TicketCountAggregate } from './ticket-count-aggregate.output';
import { TicketMinAggregate } from './ticket-min-aggregate.output';
import { TicketMaxAggregate } from './ticket-max-aggregate.output';

@ObjectType()
export class TicketGroupBy {

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    rentDate!: Date | string;

    @Field(() => Date, {nullable:false})
    returnDate!: Date | string;

    @Field(() => String, {nullable:false})
    bookId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => TicketCountAggregate, {nullable:true})
    _count?: TicketCountAggregate;

    @Field(() => TicketMinAggregate, {nullable:true})
    _min?: TicketMinAggregate;

    @Field(() => TicketMaxAggregate, {nullable:true})
    _max?: TicketMaxAggregate;
}
