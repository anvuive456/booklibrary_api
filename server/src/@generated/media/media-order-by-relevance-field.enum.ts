import { registerEnumType } from '@nestjs/graphql';

export enum MediaOrderByRelevanceFieldEnum {
    id = "id",
    thumbnail = "thumbnail",
    image = "image",
    blurhash = "blurhash"
}


registerEnumType(MediaOrderByRelevanceFieldEnum, { name: 'MediaOrderByRelevanceFieldEnum', description: undefined })
