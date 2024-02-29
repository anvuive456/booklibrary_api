import { registerEnumType } from '@nestjs/graphql';

export enum CategoryOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    slug = "slug"
}


registerEnumType(CategoryOrderByRelevanceFieldEnum, { name: 'CategoryOrderByRelevanceFieldEnum', description: undefined })
