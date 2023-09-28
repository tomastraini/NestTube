import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PartsService } from '../Services/parts.service';
import { Parts } from '../Models/parts';
import { PartsDTO } from './DTOs/PartsDTO';

@Controller('parts')
export class PartsController {
    constructor(private readonly partsService: PartsService) {}

    @Get()
    findAll(): Promise<Parts[]> {
        return this.partsService.findAll();
    }

    @Post()
    insertOne(@Body() partsDTO: PartsDTO): Promise<Parts>
    {
        const { name, plant, units, weight } = partsDTO;
        return this.partsService.insertOne({ name, plant, units, weight });
    }
}
