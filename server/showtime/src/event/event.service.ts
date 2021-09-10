import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private readonly model: Model<EventDocument>,
  ) {}

  async findAll(): Promise<Event[]> {
    return await this.model
      .find()
      .populate('artist')
      .populate('location')
      .populate('category')
      .exec();
  }

  async findOne(id: string): Promise<Event> {
    return await this.model
      .findById(id)
      .populate('artist')
      .populate('location')
      .populate('category')
      .exec();
  }

  async create(createEventDto: CreateEventDto): Promise<Event> {
    return await new this.model({
      ...createEventDto,
      created_at: new Date(),
    }).save();
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return await this.model.findByIdAndUpdate(id, updateEventDto).exec();
  }

  async delete(id: string): Promise<Event> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
