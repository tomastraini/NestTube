import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartsController } from './Controllers/parts.controller';
import { PartsService } from './Services/parts.service';
import { Parts, PartsSchema } from './Models/parts';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://locoscrafteros96:fYO4PMcPGfxLBPVf@cluster0.asagbbp.mongodb.net/?retryWrites=true&w=majority', {
  }),
  MongooseModule.forFeature([{ name: Parts.name, schema: PartsSchema }])],
  controllers: [PartsController],
  providers: [PartsService]
})

export class AppModule {}
