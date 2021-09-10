import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location, LocationDocument } from './schemas/location.schema';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private readonly model: Model<LocationDocument>,
  ) {}

  async findAll(): Promise<Location[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Location> {
    return await this.model.findById(id).exec();
  }

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return await new this.model({
      ...createLocationDto,
      created_at: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateLocationDto: UpdateLocationDto,
  ): Promise<Location> {
    return await this.model.findByIdAndUpdate(id, updateLocationDto).exec();
  }

  async delete(id: string): Promise<Location> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
