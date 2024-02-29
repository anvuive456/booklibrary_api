import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Media } from '../media/media.model';
import { Address } from '../address/address.model';

@ObjectType()
export class Profile {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    mediaId!: string;

    @Field(() => Int, {nullable:true})
    addressId!: number | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Media, {nullable:false})
    media?: Media;

    @Field(() => Address, {nullable:true})
    address?: Address | null;
}
