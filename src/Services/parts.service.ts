import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parts } from '../Models/parts';
import mongoose, { Model } from 'mongoose';

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

    async updateOne(parts: any): Promise<Parts> {
        const { id, name, plant, units, weight } = parts;
      
        if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new BadRequestException('Invalid ID');
        }
      
        const update = {
          name,
          plant,
          units,
          weight,
        };
      
        const updatedPart = await this.partsModel.findByIdAndUpdate(id, update, {
          new: true,
        });
      
        if (!updatedPart) {
          throw new NotFoundException('Part not found');
        }
      
        return updatedPart;
      }
      
    async deleteById(id: string): Promise<void> {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new BadRequestException('Invalid ID');
        }

        // Attempt to find and delete the document by ID
        const deletedPart = await this.partsModel.findByIdAndDelete(id);

        if (!deletedPart) {
            throw new NotFoundException('Part not found');
        }
    }
}
