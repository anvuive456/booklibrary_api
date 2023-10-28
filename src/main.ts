import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RedisIoAdapter } from './module/redemption/redis-io.adapter';
import { VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { json } from 'express';
import { CustomResponseInterceptor } from './interceptors/custom-inter.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';

patchNestJsSwagger();

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    snapshot: true,
  });
  app.use(json({ limit: '50mb' }));

  app.setGlobalPrefix('api');
  app.enableVersioning({
    defaultVersion: VERSION_NEUTRAL,
    type: VersioningType.URI,
  });

  app.useGlobalInterceptors(new CustomResponseInterceptor());

  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);

  const config = new DocumentBuilder()
    .setTitle('Book Library API')
    .setDescription('')
    .setVersion('1.0')
    .addTag('booklibrary')
    .addSecurity('Bearer', {
      scheme: 'Bearer',
      type: 'http',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000, '0.0.0.0', async () => {
    console.log(`Application is running on: ${await app.getUrl()}`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  app.enableShutdownHooks();
}

bootstrap();
