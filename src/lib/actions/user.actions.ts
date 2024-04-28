'use server';

import { CreateUserParams } from '@/types';
import { handleError } from '../../utils/utils';
import User from '../database/models/user.model';
import { connectToDatabase } from '../database/mongoose';

// CREATE NEW USER
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
