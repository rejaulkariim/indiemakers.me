import { Schema, model, models } from 'mongoose';

export interface IProducts extends Document {
  name: string;
  slug: string;
  title: string;
  image: string;
  website: string;
  description: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: string;
  status: string;
  comments: Schema.Types.ObjectId[];
  createdAt: Date;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['NEW', 'TRENDING', 'FEATURED'],
    default: 'NEW',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = models?.Product || model('Product', ProductSchema);

export default Product;
