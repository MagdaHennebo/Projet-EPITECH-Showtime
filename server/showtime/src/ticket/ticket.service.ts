import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Model } from 'mongoose';
import { Ticket, TicketDocument } from './schemas/ticket.schema';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly model: Model<TicketDocument>,
  ) {}

  async findAll(): Promise<Ticket[]> {
    return await this.model
      .find()
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'artist', model: 'Artist' },
      })
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'location', model: 'Location' },
      })
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'category', model: 'Category' },
      })
      .populate('user')
      .exec();
  }

  async findOne(id: string): Promise<Ticket> {
    return await this.model
      .findById(id)
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'artist', model: 'Artist' },
      })
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'location', model: 'Location' },
      })
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'category', model: 'Category' },
      })
      .populate('user')
      .exec();
  }

  async findAllByUserId(id: string): Promise<Ticket[]> {
    return await this.model
      .find({ user: id })
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'artist', model: 'Artist' },
      })
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'location', model: 'Location' },
      })
      .populate({
        path: 'event',
        model: 'Event',
        populate: { path: 'category', model: 'Category' },
      })
      .populate('user')
      .exec();
  }

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    return await new this.model({
      ...createTicketDto,
      created_at: new Date(),
    }).save();
  }

  async update(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    return await this.model.findByIdAndUpdate(id, updateTicketDto).exec();
  }

  async delete(id: string): Promise<Ticket> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
