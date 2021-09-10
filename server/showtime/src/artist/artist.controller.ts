import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistService } from './artist.service';

@Controller('artists')
export class ArtistController {
  constructor(private readonly service: ArtistService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createArtistDto: CreateArtistDto) {
    return await this.service.create(createArtistDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body()updateArtistDto: UpdateArtistDto) {
    return await this.service.update(id, updateArtistDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
