import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TicketBookIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    bookId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
