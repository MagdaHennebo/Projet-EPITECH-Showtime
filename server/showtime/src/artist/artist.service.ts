import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist, ArtistDocument } from './schemas/artist.schema';

@Injectable()
export class ArtistService {
  constructor(
    @InjectModel(Artist.name) private readonly model: Model<ArtistDocument>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return await this.model.find().populate('category').exec();
  }

  async findOne(id: string): Promise<Artist> {
    return await this.model.findById(id).populate('category').exec();
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    return await new this.model({
      ...createArtistDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    return await this.model.findByIdAndUpdate(id, updateArtistDto).exec();
  }

  async delete(id: string): Promise<Artist> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
