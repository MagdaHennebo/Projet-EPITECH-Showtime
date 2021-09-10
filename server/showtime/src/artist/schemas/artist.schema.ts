import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Category } from '../../category/schemas/category.schema';

export type ArtistDocument = Artist & Document;

@Schema()
export class Artist {
  @Prop()
  id?: string;

  @Prop({ required: true })
  artist_name: string;

  @Prop({ required: true })
  photo?: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updateAt?: Date;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
