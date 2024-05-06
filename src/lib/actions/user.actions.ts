'use server';

import { CreateUserParams } from '@/types';
import { revalidatePath } from 'next/cache';
import User from '../database/models/user.model';
import { connectToDatabase } from '../database/mongoose';
import { ToggleSaveProductParams } from './shared.types';

// CREATE NEW USER
export async function createUser(user: CreateUserParams) {
  console.log(user, 'user check');
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

// READ
export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error('User not found');

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: any) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error('User update failed');

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error('User not found');
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    // revalidatePath('/');

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    console.log(error);
  }
}

// USE CREDITS
export async function updateCredits(userId: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );

    if (!updatedUserCredits) throw new Error('User credits update failed');

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    console.log(error);
  }
}

// SAVE PRODUCT
export async function toggleSaveProduct(params: ToggleSaveProductParams) {
  try {
    await connectToDatabase();

    const { userId, productId, path } = params;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const isProductSaved = user.saved.includes(productId);

    if (isProductSaved) {
      // remove product from saved
      await User.findByIdAndUpdate(
        userId,
        { $pull: { saved: productId } },
        { new: true }
      );
    } else {
      // add product to saved
      await User.findByIdAndUpdate(
        userId,
        { $addToSet: { saved: productId } },
        { new: true }
      );
    }

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
