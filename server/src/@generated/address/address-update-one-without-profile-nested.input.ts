import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutProfileInput } from './address-create-or-connect-without-profile.input';
import { AddressUpsertWithoutProfileInput } from './address-upsert-without-profile.input';
import { AddressWhereInput } from './address-where.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutProfileInput } from './address-update-to-one-with-where-without-profile.input';

@InputType()
export class AddressUpdateOneWithoutProfileNestedInput {

    @Field(() => AddressCreateWithoutProfileInput, {nullable:true})
    @Type(() => AddressCreateWithoutProfileInput)
    create?: AddressCreateWithoutProfileInput;

    @Field(() => AddressCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutProfileInput)
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput;

    @Field(() => AddressUpsertWithoutProfileInput, {nullable:true})
    @Type(() => AddressUpsertWithoutProfileInput)
    upsert?: AddressUpsertWithoutProfileInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    disconnect?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    delete?: AddressWhereInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutProfileInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutProfileInput)
    update?: AddressUpdateToOneWithWhereWithoutProfileInput;
}
