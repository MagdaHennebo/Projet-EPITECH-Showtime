import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Artist } from '../../artist/schemas/artist.schema';
import { Location } from '../../location/schemas/location.schema';
import { Category } from '../../category/schemas/category.schema';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  id?: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Artist' })
  artist: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Location' })
  location: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category: string;

  @Prop()
  event_name?: string;

  @Prop()
  event_date?: Date;

  @Prop()
  description?: string;

  @Prop()
  price?: string;

  @Prop()
  photo?: string;

  @Prop({ required: true })
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
