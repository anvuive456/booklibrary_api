import { registerEnumType } from '@nestjs/graphql';

export enum PriceOrderByRelevanceFieldEnum {
    id = "id"
}


registerEnumType(PriceOrderByRelevanceFieldEnum, { name: 'PriceOrderByRelevanceFieldEnum', description: undefined })
