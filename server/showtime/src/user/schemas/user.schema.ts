import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  password?: string;

  @Prop()
  admin?: boolean;

  @Prop()
  created_at?: Date;

  @Prop()
  updated_at: Date;

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

// NOTE: Arrow functions are not used here as we do not want to use lexical scope for 'this'
UserSchema.pre('save', function (next) {
  const user = this as any;
  // Make sure not to rehash the password if it is already hashed
  if (!user.isModified('password')) return next();
  // Generate a salt and use it to hash the user's password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
  var mongoose = require('mongoose');
  var id = mongoose.Types.ObjectId();
  user._id = id.toString();
});
