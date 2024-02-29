import { registerEnumType } from '@nestjs/graphql';

export enum PriceScalarFieldEnum {
    id = "id",
    value = "value",
    unit = "unit"
}


registerEnumType(PriceScalarFieldEnum, { name: 'PriceScalarFieldEnum', description: undefined })
