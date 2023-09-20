import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Connect to MongoDB
  await mongoose.connect('mongodb+srv://locoscrafteros96:161481AaCc@cluster0.asagbbp.mongodb.net/?retryWrites=true&w=majority', {

  });
  await app.listen(3000);
}
bootstrap();
