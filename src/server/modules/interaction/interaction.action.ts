'use server'

import { ViewProductParams } from '@/lib/actions/shared.types'
import { connectToDatabase } from '@/server/mongoose'
import Product from '../product/product.model'
import Interaction from './interaction.model'

export async function viewProduct(params: ViewProductParams) {
  try {
    await connectToDatabase()

    const { productId, userId } = params

    // Update view count for the product
    await Product.findByIdAndUpdate(productId, { $inc: { views: 1 } })

    if (userId) {
      const existingInteraction = await Interaction.findOne({
        user: userId,
        action: 'view',
        product: productId
      })

      if (existingInteraction) return console.log('User has already viewed.')

      // Create interaction
      await Interaction.create({
        user: userId,
        action: 'view',
        product: productId
      })
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
