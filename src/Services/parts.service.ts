import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parts } from '../Models/parts';
import { Model } from 'mongoose';

@Injectable()
export class PartsService {
    constructor(@InjectModel(Parts.name) private partsModel: Model<Parts>) {}

    async findAll(): Promise<Parts[]> {
        return this.partsModel.find().exec();
    }
    async insertOne(parts: any): Promise<Parts> {
        const { name, plant, units, weight } = parts;
        const newPart = new
            this.partsModel(
                {
                    name,
                    plant,
                    units,
                    weight
                });
        return newPart.save();
    }
}
