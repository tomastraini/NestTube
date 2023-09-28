import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Parts extends Document {
    constructor() {
        super();
        this.name = '';
        this.plant = 0;
        this.units = 0;
        this.weight = 0;
    }
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    plant: number;
    @Prop({ required: true })
    units: number;
    @Prop({ required: true })
    weight: number;
}
export const PartsSchema = SchemaFactory.createForClass(Parts);