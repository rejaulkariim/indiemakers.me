import { Schema, model, models } from 'mongoose'

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  stripeId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Transaction =
  models?.Transaction || model('Transaction', TransactionSchema)

export default Transaction
