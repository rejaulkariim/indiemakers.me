import { Document, Schema, model, models } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
}

const NewsletterSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Newsletter = models.Newsletter || model('Newsletter', NewsletterSchema);

export default Newsletter;
