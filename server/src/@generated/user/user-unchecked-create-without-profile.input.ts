import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { TicketUncheckedCreateNestedManyWithoutUserInput } from '../ticket/ticket-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutProfileInput {

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

    @Field(() => TicketUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput;
}
