import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutProfileInput } from './address-create-without-profile.input';

@InputType()
export class AddressCreateOrConnectWithoutProfileInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutProfileInput, {nullable:false})
    @Type(() => AddressCreateWithoutProfileInput)
    create!: AddressCreateWithoutProfileInput;
}
