import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    member = "member",
    librarian = "librarian",
    admin = "admin"
}


registerEnumType(Role, { name: 'Role', description: undefined })
