import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Clients extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    phone: string;
}
export const ClientSchema = SchemaFactory.createForClass(Clients);