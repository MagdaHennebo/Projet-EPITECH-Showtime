import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist, WishlistDocument } from './schemas/wishlist.schema';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist.name) private readonly model: Model<WishlistDocument>,
  ) {}

  async findAll(): Promise<Wishlist[]> {
    return await this.model.find().populate('event').populate('user').exec();
  }

  async findOne(id: string): Promise<Wishlist> {
    return await this.model
      .findById(id)
      .populate('event')
      .populate('user')
      .exec();
  }

  async findAllByUserId(id: string): Promise<Wishlist[]> {
    return await this.model.find({user: id}).populate('event').populate('user').exec();
  }

  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    return await new this.model({
      ...createWishlistDto,
      created_at: new Date(),
    }).save();
  }

  async update(
    id: string,
    updateWishlistDto: UpdateWishlistDto,
  ): Promise<Wishlist> {
    return await this.model.findByIdAndUpdate(id, updateWishlistDto).exec();
  }

  async delete(id: string): Promise<Wishlist> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
