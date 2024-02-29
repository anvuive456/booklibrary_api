import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateManyBookInput } from './ticket-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketCreateManyBookInputEnvelope {

    @Field(() => [TicketCreateManyBookInput], {nullable:false})
    @Type(() => TicketCreateManyBookInput)
    data!: Array<TicketCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
