import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Connect to MongoDB
  await mongoose.connect('mongodb+srv://locoscrafteros96:fYO4PMcPGfxLBPVf@cluster0.asagbbp.mongodb.net/?retryWrites=true&w=majority', {

  });
  app.useGlobalPipes(new ValidationPipe());
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
