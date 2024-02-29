import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutProfileInput } from './address-create-or-connect-without-profile.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutProfileInput {

    @Field(() => AddressCreateWithoutProfileInput, {nullable:true})
    @Type(() => AddressCreateWithoutProfileInput)
    create?: AddressCreateWithoutProfileInput;

    @Field(() => AddressCreateOrConnectWithoutProfileInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutProfileInput)
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
