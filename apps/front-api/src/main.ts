import helmet from 'fastify-helmet';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppClusterService } from './app/app-cluster.service';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      ignoreTrailingSlash: true,
      caseSensitive: false,
      trustProxy: true,
    }),
  );

  app.setGlobalPrefix('api');

  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'validator.swagger.io'],
        scriptSrc: ["'self'", "https: 'unsafe-inline'"],
      },
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
        excludeExtraneousValues: false,
      },
      whitelist: true,
    }),
  );

  app.enableCors();

  const port = process.env.PORT || 8000
  await app.listen(port);
  console.log(
    `Service workers ${process.pid} is running on: ${await app.getUrl()}`,
  );
}

AppClusterService.clusterize(bootstrap);
