import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { TicketCreateNestedManyWithoutUserInput } from '../ticket/ticket-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => TicketCreateNestedManyWithoutUserInput, {nullable:true})
    tickets?: TicketCreateNestedManyWithoutUserInput;
}
