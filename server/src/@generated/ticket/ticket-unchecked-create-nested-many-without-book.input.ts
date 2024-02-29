import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutBookInput } from './ticket-create-without-book.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutBookInput } from './ticket-create-or-connect-without-book.input';
import { TicketCreateManyBookInputEnvelope } from './ticket-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [TicketCreateWithoutBookInput], {nullable:true})
    @Type(() => TicketCreateWithoutBookInput)
    create?: Array<TicketCreateWithoutBookInput>;

    @Field(() => [TicketCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutBookInput>;

    @Field(() => TicketCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyBookInputEnvelope)
    createMany?: TicketCreateManyBookInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>>;
}
