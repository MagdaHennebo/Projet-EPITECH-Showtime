import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Event } from '../../event/schemas/event.schema';
import { User } from '../../user/schemas/user.schema';

export type WishlistDocument = Wishlist & Document;

@Schema()
export class Wishlist {
  @Prop()
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  event: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ required: true })
  created_at: Date;

  @Prop()
  deleted_at?: Date;
}

export const WishlistSchema = SchemaFactory.createForClass(Wishlist);
