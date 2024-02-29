import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from '../module/auth/auth.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ProfileModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      subscriptions: {
        'subscriptions-transport-ws': {
          path: '/graphql',
        },
      },
    }),
    BookModule,
  ],
  exports: [],
})
export class AppgraphqlModule {}
