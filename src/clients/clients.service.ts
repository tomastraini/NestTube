import { Injectable } from '@nestjs/common';
import { Clients } from './clients';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
    constructor(@InjectModel(Clients.name) private clientModel: Model<Clients>) {}

    async findAll(): Promise<Clients[]> {
        return this.clientModel.find().exec();
    }
    async insertOne(name: string, phone: string): Promise<Clients> {
        const newClient = new this.clientModel({ name, phone });
        return newClient.save();
    }
}
