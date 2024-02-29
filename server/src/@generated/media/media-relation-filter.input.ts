import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';

@InputType()
export class MediaRelationFilter {

    @Field(() => MediaWhereInput, {nullable:true})
    is?: MediaWhereInput;

    @Field(() => MediaWhereInput, {nullable:true})
    isNot?: MediaWhereInput;
}
