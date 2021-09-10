import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Artist } from '../../artist/schemas/artist.schema';
import { User } from '../../user/schemas/user.schema';

export type ArtistFavorisDocument = ArtistFavoris & Document;

@Schema()
export class ArtistFavoris {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Artist' })
  artist: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const ArtistFavorisSchema = SchemaFactory.createForClass(ArtistFavoris);
