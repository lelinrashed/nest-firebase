import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 8000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Server is listening on port ${port}`);
}
bootstrap();
