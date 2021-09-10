import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArtistFavorisDto } from './dto/create-artist-favoris.dto';
import { UpdateArtistFavorisDto } from './dto/update-artist-favoris.dto';
import {
  ArtistFavoris,
  ArtistFavorisDocument,
} from './schemas/artist-favoris.schema';

@Injectable()
export class ArtistFavorisService {
  constructor(
    @InjectModel(ArtistFavoris.name)
    private readonly model: Model<ArtistFavorisDocument>,
  ) {}

  async findAll(): Promise<ArtistFavoris[]> {
    return await this.model.find().populate('artist').populate('user').exec();
  }

  async findOne(id: string): Promise<ArtistFavoris> {
    return await this.model
      .findById(id)
      .populate('artist')
      .populate('user')
      .exec();
  }

  async findAllByUserId(id: string): Promise<ArtistFavoris[]> {
    return await this.model.find({user: id}).populate('artist').populate('user').exec();
  }

  async create(
    createArtistFavorisDto: CreateArtistFavorisDto,
  ): Promise<ArtistFavoris> {
    return await new this.model({
      ...createArtistFavorisDto,
      created_at: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateArtistFavorisDto: UpdateArtistFavorisDto,
  ): Promise<ArtistFavoris> {
    return await this.model
      .findByIdAndUpdate(id, updateArtistFavorisDto)
      .exec();
  }

  async delete(id: string): Promise<ArtistFavoris> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
