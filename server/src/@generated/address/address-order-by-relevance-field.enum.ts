import { registerEnumType } from '@nestjs/graphql';

export enum AddressOrderByRelevanceFieldEnum {
    street = "street",
    country = "country",
    state = "state",
    city = "city",
    province = "province"
}


registerEnumType(AddressOrderByRelevanceFieldEnum, { name: 'AddressOrderByRelevanceFieldEnum', description: undefined })
