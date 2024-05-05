import { Document, Schema, model, models } from 'mongoose';

export interface IProduct extends Document {
  author: Schema.Types.ObjectId;
  product: Schema.Types.ObjectId;
  content: string;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  createdAt: Date;
}

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  content: {
    type: String,
    required: true,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = models.Comment || model('Comment', CommentSchema);

export default Comment;
