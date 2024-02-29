import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    publisher = "publisher",
    author = "author",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    epub = "epub",
    mediaId = "mediaId",
    priceId = "priceId"
}


registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
