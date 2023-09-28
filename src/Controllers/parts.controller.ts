import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { PartsService } from '../Services/parts.service';
import { Parts } from '../Models/parts';
import { PartsDTO } from './DTOs/PartsDTO';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Parts')
@Controller('parts')
export class PartsController {
    constructor(private readonly partsService: PartsService) {}

    @ApiOperation({ summary: 'Get all parts' })
    @ApiResponse({ status: 200, description: 'Success', type: [Parts] })
    @Get()
    findAll(): Promise<Parts[]> {
        return this.partsService.findAll();
    }

    @ApiOperation({ summary: 'Insert a part' })
    @ApiResponse({ status: 200, description: 'Success', type: [Parts] })
    @Post()
    insertOne(@Body() partsDTO: PartsDTO): Promise<Parts>
    {
        const { name, plant, units, weight } = partsDTO;
        return this.partsService.insertOne({ name, plant, units, weight });
    }

    @ApiOperation({ summary: 'Modify a part' })
    @ApiResponse({ status: 200, description: 'Success', type: [Parts] })
    @Put()
    updateOne(@Body() partsDTO: PartsDTO): Promise<Parts>
    {
        const { id, name, plant, units, weight } = partsDTO;
        return this.partsService.updateOne({ id, name, plant, units, weight });
    }

    @ApiOperation({ summary: 'Delete a part' })
    @ApiResponse({ status: 200, description: 'Success', type: [Parts] })
    @Delete()
    async deleteOne(@Query('partID') partID: string): Promise<{ message: string }> {
      await this.partsService.deleteById(partID);
      return { message: 'Part deleted successfully' };
    }
}
