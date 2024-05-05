import { Document, Schema, model, models } from 'mongoose';

export interface IInteraction extends Document {
  user: Schema.Types.ObjectId;
  action: string;
  product: Schema.Types.ObjectId;
  comment: Schema.Types.ObjectId;
  tags: Schema.Types.ObjectId[];
  createdAt: Date;
}

const InteractionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Interaction =
  models.Interaction || model('Interaction', InteractionSchema);

export default Interaction;
