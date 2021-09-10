import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishlistService } from './wishlist.service';

@Controller('wishlists')
export class WishlistController {
  constructor(private readonly service: WishlistService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createWishlistDto: CreateWishlistDto) {
    return await this.service.create(createWishlistDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return await this.service.update(id, updateWishlistDto);
  }

  @Get('/user/:id')
  async findByUserId(@Param('id') id: string){
    return await this.service.findAllByUserId(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
