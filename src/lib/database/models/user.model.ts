import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photo: string;
  planId: number;
  creditBalance: number;
  role: 'user' | 'admin';
  password?: string;
  location?: string;
  bio?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  photo: {
    type: String,
    required: true,
    trim: true,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
  password: {
    type: String,
  },
  location: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  reputation: {
    type: Number,
  },
  saved: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  joinAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models?.User || model('User', UserSchema);
export default User;
