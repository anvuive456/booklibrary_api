import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name",
    slug = "slug"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
