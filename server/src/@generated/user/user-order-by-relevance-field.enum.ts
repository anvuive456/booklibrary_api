import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
    id = "id",
    username = "username",
    password = "password"
}


registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
