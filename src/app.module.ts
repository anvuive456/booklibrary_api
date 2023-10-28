import { Module } from '@nestjs/common';
// import { RedemptionGateway } from './module/redemption/redemption.gateway';
import { PrismaModule } from './db/prisma.module';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { jwtConstants } from './module/auth/constants';
import { JwtModule } from '@nestjs/jwt';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import {
  ZodErrorFilter,
  ZodValidationFilter,
} from './filters/zod-error.filter';
import { BookModule } from './module/book/book.module';
import { ZodValidationPipe } from 'nestjs-zod';
import { CategoryModule } from './module/category/category.module';
import { TicketModule } from './module/ticket/ticket.module';
import { ProfileModule } from './module/profile/profile.module';
import { MediaModule } from './module/media/media.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { diskStorage } from 'multer';
import e from 'express';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    BookModule,
    CategoryModule,
    TicketModule,
    ProfileModule,
    MediaModule,

    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
    ScheduleModule.forRoot(),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  providers: [
    // RedemptionGateway,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ZodErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ZodValidationFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
