import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutBookInput } from './ticket-create-without-book.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutBookInput } from './ticket-create-or-connect-without-book.input';
import { TicketUpsertWithWhereUniqueWithoutBookInput } from './ticket-upsert-with-where-unique-without-book.input';
import { TicketCreateManyBookInputEnvelope } from './ticket-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { TicketUpdateWithWhereUniqueWithoutBookInput } from './ticket-update-with-where-unique-without-book.input';
import { TicketUpdateManyWithWhereWithoutBookInput } from './ticket-update-many-with-where-without-book.input';
import { TicketScalarWhereInput } from './ticket-scalar-where.input';

@InputType()
export class TicketUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [TicketCreateWithoutBookInput], {nullable:true})
    @Type(() => TicketCreateWithoutBookInput)
    create?: Array<TicketCreateWithoutBookInput>;

    @Field(() => [TicketCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => TicketCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<TicketCreateOrConnectWithoutBookInput>;

    @Field(() => [TicketUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => TicketUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<TicketUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => TicketCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => TicketCreateManyBookInputEnvelope)
    createMany?: TicketCreateManyBookInputEnvelope;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>>;

    @Field(() => [TicketWhereUniqueInput], {nullable:true})
    @Type(() => TicketWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TicketWhereUniqueInput, 'bookId' | 'userId' | 'bookId_userId'>>;

    @Field(() => [TicketUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => TicketUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<TicketUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [TicketUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => TicketUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<TicketUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [TicketScalarWhereInput], {nullable:true})
    @Type(() => TicketScalarWhereInput)
    deleteMany?: Array<TicketScalarWhereInput>;
}
