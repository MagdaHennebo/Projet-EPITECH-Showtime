import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Category } from '../../category/schemas/category.schema';

export type CategoryFavorisDocument = CategoryFavoris & Document;

@Schema()
export class CategoryFavoris {
  @Prop()
  id: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  category: string;

  @Prop({ required: true })
  created_at: Date;

  @Prop()
  updated_at?: Date;
}

export const CategoryFavorisSchema = SchemaFactory.createForClass(
  CategoryFavoris,
);
