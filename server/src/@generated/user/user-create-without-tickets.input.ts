import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ProfileCreateNestedOneWithoutUserInput } from '../profile/profile-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutTicketsInput {

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

    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: ProfileCreateNestedOneWithoutUserInput;
}
