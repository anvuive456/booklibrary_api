import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProfileService } from '../../module/profile/profile.service';
import { PrismaModule } from '../../db/prisma.module';
import { ProfileResolver } from './profile.resolver';
import { MediaService } from '../../module/media/media.service';
import { UserService } from '../../module/user/user.service';
import { AddressService } from '../../module/address/address.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ProfileResolver,
    ProfileService,
    MediaService,
    UserService,
    AddressService,
  ],
})
export class ProfileModule {}
