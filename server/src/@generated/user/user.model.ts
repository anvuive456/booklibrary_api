import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Profile } from '../profile/profile.model';
import { Ticket } from '../ticket/ticket.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @HideField()
    password!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => [Ticket], {nullable:true})
    tickets?: Array<Ticket>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
