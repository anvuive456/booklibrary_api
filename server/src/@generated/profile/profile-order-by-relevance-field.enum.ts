import { registerEnumType } from '@nestjs/graphql';

export enum ProfileOrderByRelevanceFieldEnum {
    id = "id",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    phone = "phone",
    userId = "userId",
    mediaId = "mediaId"
}


registerEnumType(ProfileOrderByRelevanceFieldEnum, { name: 'ProfileOrderByRelevanceFieldEnum', description: undefined })
