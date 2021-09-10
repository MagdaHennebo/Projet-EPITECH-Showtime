import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryFavorisDto } from './dto/create-categoryfavoris.dto';
import { UpdateCategoryFavorisDto } from './dto/update-categoryfavoris.dto';
import { CategoryFavorisService } from './category-favoris.service';

@Controller('category_favoris')
export class CategoryFavorisController {
  constructor(private readonly service: CategoryFavorisService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createCategoryFavorisDto: CreateCategoryFavorisDto) {
    return await this.service.create(createCategoryFavorisDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryFavorisDto: UpdateCategoryFavorisDto,
  ) {
    return await this.service.update(id, updateCategoryFavorisDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
