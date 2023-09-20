import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Clients } from './clients';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Get()
    findAll(): Promise<Clients[]> {
        return this.clientsService.findAll();
    }
    // name: string, phone: string
    @Post()
    insertOne(@Query('name') name: string, @Query('phone')phone: string): Promise<Clients> {
        return this.clientsService.insertOne(name, phone);
    }
}
