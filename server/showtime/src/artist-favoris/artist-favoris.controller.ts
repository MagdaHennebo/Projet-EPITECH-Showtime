import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateArtistFavorisDto } from './dto/create-artist-favoris.dto';
import { UpdateArtistFavorisDto } from './dto/update-artist-favoris.dto';
import { ArtistFavorisService } from './artist-favoris.service';

@Controller('artist_favoris')
export class ArtistFavorisController {
  constructor(private readonly service: ArtistFavorisService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Get('/user/:id')
  async findByUserId(@Param('id') id: string){
    return await this.service.findAllByUserId(id);
  }

  @Post()
  async create(@Body() createArtistFavorisDto: CreateArtistFavorisDto) {
    return await this.service.create(createArtistFavorisDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArtistFavorisDto: UpdateArtistFavorisDto,
  ) {
    return await this.service.update(id, updateArtistFavorisDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
