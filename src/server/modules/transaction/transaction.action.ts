'use server'

import { connectToDatabase } from '@/server/mongoose'
import { CheckoutTransactionParams, CreateTransactionParams } from '@/types'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'
import Transaction from './transaction.model'

export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const amount = Number(transaction.amount) * 100

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: amount,
          product_data: {
            name: transaction.name
          }
        },
        quantity: 1
      }
    ],
    metadata: {
      name: transaction.name,
      amount: transaction.amount,
      buyerId: transaction.buyerId
    },
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/user/dashboard/profile`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`
  })

  redirect(session.url!)
}

export async function createTransaction(transaction: CreateTransactionParams) {
  console.log(transaction, 'transaction')
  try {
    await connectToDatabase()

    // Create a new transaction with a buyerId
    const newTransaction = await Transaction.create({
      ...transaction,
      buyer: transaction.buyerId
    })

    return JSON.parse(JSON.stringify(newTransaction))
  } catch (error) {
    console.log(error)
    throw new Error('Transaction creation failed')
    // handleError(error);
  }
}
