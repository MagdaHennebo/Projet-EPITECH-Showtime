import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  @Prop({ required: true })
  location_name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  zip_code: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
