'use server';

import Interaction from '../database/models/interaction.model';
import Product from '../database/models/product.model';
import { connectToDatabase } from '../database/mongoose';
import { ViewProductParams } from './shared.types';

export async function viewProduct(params: ViewProductParams) {
  try {
    await connectToDatabase();

    const { productId, userId } = params;

    // Update view count for the question
    await Product.findByIdAndUpdate(productId, { $inc: { views: 1 } });

    if (userId) {
      const existingInteraction = await Interaction.findOne({
        user: userId,
        action: 'view',
        question: productId,
      });

      if (existingInteraction) return console.log('User has already viewed.');

      // Create interaction
      await Interaction.create({
        user: userId,
        action: 'view',
        question: productId,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
