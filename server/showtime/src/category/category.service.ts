import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly model: Model<CategoryDocument>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    return await this.model.findById(id).exec();
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await new this.model({
      ...createCategoryDto,
      created_at: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return await this.model.findByIdAndUpdate(id, updateCategoryDto).exec();
  }

  async delete(id: string): Promise<Category> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
