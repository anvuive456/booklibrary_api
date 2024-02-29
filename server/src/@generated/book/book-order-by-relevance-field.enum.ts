import { registerEnumType } from '@nestjs/graphql';

export enum BookOrderByRelevanceFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    publisher = "publisher",
    author = "author",
    epub = "epub",
    mediaId = "mediaId",
    priceId = "priceId"
}


registerEnumType(BookOrderByRelevanceFieldEnum, { name: 'BookOrderByRelevanceFieldEnum', description: undefined })
