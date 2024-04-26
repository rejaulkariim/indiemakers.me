import { Schema, model, models } from 'mongoose';

const ServiceSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  imageUrl: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    default: false,
  },
});

const Service = models.Service || model('Service', ServiceSchema);

export default Service;
