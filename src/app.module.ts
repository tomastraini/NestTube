import { Module } from '@nestjs/common';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Clients, ClientSchema } from './clients/clients';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://locoscrafteros96:fYO4PMcPGfxLBPVf@cluster0.asagbbp.mongodb.net/?retryWrites=true&w=majority', {
  }),
  MongooseModule.forFeature([{ name: Clients.name, schema: ClientSchema }]),],
  controllers: [ClientsController],
  providers: [ClientsService],
})

export class AppModule {}
