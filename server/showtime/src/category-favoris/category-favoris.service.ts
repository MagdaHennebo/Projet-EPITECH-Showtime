import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryFavorisDto } from './dto/create-categoryfavoris.dto';
import { UpdateCategoryFavorisDto } from './dto/update-categoryfavoris.dto';
import {
  CategoryFavoris,
  CategoryFavorisDocument,
} from './schemas/categoryfavoris.schema';

@Injectable()
export class CategoryFavorisService {
  constructor(
    @InjectModel(CategoryFavoris.name)
    private readonly model: Model<CategoryFavorisDocument>,
  ) {}

  async findAll(): Promise<CategoryFavoris[]> {
    return await this.model.find().populate('category').populate('user').exec();
  }

  async findOne(id: string): Promise<CategoryFavoris> {
    return await this.model
      .findById(id)
      .populate('category')
      .populate('user')
      .exec();
  }

  async create(
    createCategoryFavorisDto: CreateCategoryFavorisDto,
  ): Promise<CategoryFavoris> {
    return await new this.model({
      ...createCategoryFavorisDto,
      created_at: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateCategoryFavorisDto: UpdateCategoryFavorisDto,
  ): Promise<CategoryFavoris> {
    return await this.model
      .findByIdAndUpdate(id, updateCategoryFavorisDto)
      .exec();
  }

  async delete(id: string): Promise<CategoryFavoris> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
