import { registerEnumType } from '@nestjs/graphql';

export enum ProfileScalarFieldEnum {
    id = "id",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    phone = "phone",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId",
    mediaId = "mediaId",
    addressId = "addressId"
}


registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum', description: undefined })
