import { registerEnumType } from '@nestjs/graphql';

export enum MediaScalarFieldEnum {
    id = "id",
    thumbnail = "thumbnail",
    image = "image",
    blurhash = "blurhash",
    imageH = "imageH",
    imageW = "imageW",
    metadata = "metadata"
}


registerEnumType(MediaScalarFieldEnum, { name: 'MediaScalarFieldEnum', description: undefined })
