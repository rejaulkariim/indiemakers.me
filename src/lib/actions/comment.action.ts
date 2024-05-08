'use server';

import { revalidatePath } from 'next/cache';
import Comment from '../database/models/comment.model';
import Product from '../database/models/product.model';
import { connectToDatabase } from '../database/mongoose';
import {
  CommentVoteParams,
  CreateCommentParams,
  GetCommentParams,
} from './shared.types';

export async function createComment(params: CreateCommentParams) {
  try {
    await connectToDatabase();

    const { content, author, product, path } = params;

    const newComment = await Comment.create({ content, author, product });

    // Add the answer to the question's answers array
    const productObject = await Product.findByIdAndUpdate(product, {
      $push: { comments: newComment._id },
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getComments(params: GetCommentParams) {
  try {
    await connectToDatabase();

    const { productId, sortBy, page = 1, pageSize = 10 } = params;

    const skipAmount = (page - 1) * pageSize;

    let sortOptions = {};

    switch (sortBy) {
      case 'highestUpvotes':
        sortOptions = { upvotes: -1 };
        break;
      case 'lowestUpvotes':
        sortOptions = { upvotes: 1 };
        break;
      case 'recent':
        sortOptions = { createdAt: -1 };
        break;
      case 'old':
        sortOptions = { createdAt: 1 };
        break;

      default:
        break;
    }

    const comments = await Comment.find({ product: productId })
      .populate('author', '_id clerkId username photo')
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    const totalComments = await Comment.countDocuments({
      product: productId,
    });

    const isNextAnswer = totalComments > skipAmount + comments.length;

    return { comments, isNextAnswer };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Upvote
export async function upVoteComment(params: CommentVoteParams) {
  try {
    await connectToDatabase();

    const { commentId, userId, hasupVoted, hasdownVoted, path } = params;

    let updateQuery = {};

    if (hasupVoted) {
      updateQuery = { $pull: { upvotes: userId } };
    } else if (hasdownVoted) {
      updateQuery = {
        $pull: { downvotes: userId },
        $push: { upvotes: userId },
      };
    } else {
      updateQuery = { $addToSet: { upvotes: userId } };
    }

    const comment = await Comment.findByIdAndUpdate(commentId, updateQuery, {
      new: true,
    });

    if (!comment) {
      throw new Error('Comment not found');
    }

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Downvote
export async function downVoteComment(params: CommentVoteParams) {
  try {
    await connectToDatabase();

    const { commentId, userId, hasupVoted, hasdownVoted, path } = params;

    let updateQuery = {};

    if (hasdownVoted) {
      updateQuery = { $pull: { downvotes: userId } };
    } else if (hasupVoted) {
      updateQuery = {
        $pull: { upvotes: userId },
        $push: { downvotes: userId },
      };
    } else {
      updateQuery = { $addToSet: { downvotes: userId } };
    }

    const comment = await Comment.findByIdAndUpdate(commentId, updateQuery, {
      new: true,
    });

    if (!comment) {
      throw new Error('Comment not found');
    }

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
