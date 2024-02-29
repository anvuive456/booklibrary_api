import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
    id = "id",
    street = "street",
    country = "country",
    state = "state",
    city = "city",
    province = "province"
}


registerEnumType(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum', description: undefined })
