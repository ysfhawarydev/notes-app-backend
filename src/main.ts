import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'https://notes.ysfhawary.dev',
  });
  await app.listen(process.env.PORT ?? 5000, '0.0.0.0');
}
bootstrap();
