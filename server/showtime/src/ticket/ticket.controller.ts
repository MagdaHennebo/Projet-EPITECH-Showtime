import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketService } from './ticket.service';

@Controller('tickets')
export class TicketController {
  constructor(private readonly service: TicketService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Get('/user/:id')
  async findByUserId(@Param('id') id: string) {
    return await this.service.findAllByUserId(id);
  }

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto) {
    return await this.service.create(createTicketDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return await this.service.update(id, updateTicketDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
