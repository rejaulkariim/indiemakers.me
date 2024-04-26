import { Document, Schema, model, models } from 'mongoose';

export interface IOrder extends Document {
  stripeId: string;
  totalAmount: string;
  buyer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

export type IOrderItem = {
  _id: string;
  totalAmount: string;
  buyer: string;
};

const OrderSchema = new Schema({
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Order = models.Order || model('Order', OrderSchema);

export default Order;
