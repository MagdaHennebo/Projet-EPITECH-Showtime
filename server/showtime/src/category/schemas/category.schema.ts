import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  id: string;

  @Prop()
  category_name?: string;

  @Prop({ required: true })
  created_at: Date;

  @Prop()
  updated_at?: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
