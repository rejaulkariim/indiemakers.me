/* eslint-disable camelcase */

import { createTransaction } from '@/server/modules/transaction/transaction.action'
import { NextResponse } from 'next/server'
import stripe from 'stripe'

export async function POST(request: Request) {
  console.log('Webhook received') // Initial log
  const body = await request.text()
  console.log('Request body:', body) // Log request body

  const sig = request.headers.get('stripe-signature') as string
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

  console.log('Stripe signature:', sig) // Log stripe signature

  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
    console.log('Event constructed:', event) // Log event
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)

    return NextResponse.json({ message: 'Webhook error', error: err })
  }

  // Get the ID and type
  const eventType = event.type
  console.log('Event type:', eventType) // Log event type

  // CREATE
  if (eventType === 'checkout.session.completed') {
    const { id, amount_total, metadata } = event.data.object
        console.log('Event data:', event.data.object); // Log event data


    const transaction = {
      stripeId: id,
      amount: amount_total ? amount_total / 100 : 0,
      name: metadata?.name || '',
      buyerId: metadata?.buyerId || '',
      createdAt: new Date()
    }

    console.log(transaction, 'from api transaction')

    const newTransaction = await createTransaction(transaction)

    return NextResponse.json({ message: 'OK', transaction: newTransaction })
  }

  return new Response('', { status: 200 })
}
