import { registerEnumType } from '@nestjs/graphql';

export enum PriceUnit {
    VND = "VND",
    USD = "USD",
    EURO = "EURO"
}


registerEnumType(PriceUnit, { name: 'PriceUnit', description: undefined })
