import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Event } from '../../event/schemas/event.schema';
import { User } from '../../user/schemas/user.schema';
import { Artist } from '../../artist/schemas/artist.schema';
import { Location } from '../../location/schemas/location.schema';
import { Category } from '../../category/schemas/category.schema';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  event: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Artist' })
  artist: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Location' })
  location: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
