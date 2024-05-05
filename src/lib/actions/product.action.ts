'use server';

import { FilterQuery } from 'mongoose';
import { revalidatePath } from 'next/cache';
import Interaction from '../database/models/interaction.model';
import Product from '../database/models/product.model';
import Tag from '../database/models/tag.model';
import User from '../database/models/user.model';
import { connectToDatabase } from '../database/mongoose';
import {
  CreateProductParams,
  GetProductParams,
  ProductVoteParams,
} from './shared.types';

// Create new products
export async function createProduct(params: CreateProductParams) {
  try {
    await connectToDatabase();

    const {
      name,
      slug,
      title,
      description,
      tags,
      website,
      image,
      author,
      path,
    } = params;

    const product = await Product.create({
      name,
      title,
      slug,
      description,
      author,
      website,
      image,
    });

    console.log(product);
    const tagDocuments = [];

    // Create a tag or get them of they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { products: product._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }

    await Product.findByIdAndUpdate(product._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

// Get all products
export async function getProducts(params: GetProductParams) {
  try {
    await connectToDatabase();

    const products = await Product.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User });

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getRecommendedProducts(params: any) {
  try {
    await connectToDatabase();

    const { userId, page = 1, pageSize = 20, searchQuery } = params;

    // find user
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error('user not found');
    }

    const skipAmount = (page - 1) * pageSize;

    // Find the user's interactions
    const userInteractions = await Interaction.find({ user: user._id })
      .populate('tags')
      .exec();

    // Extract tags from user's interactions
    const userTags = userInteractions.reduce((tags, interaction) => {
      if (interaction.tags) {
        tags = tags.concat(interaction.tags);
      }
      return tags;
    }, []);

    // Get distinct tag IDs from user's interactions
    const distinctUserTagIds = [
      // @ts-ignore
      ...new Set(userTags.map((tag: any) => tag._id)),
    ];

    const query: FilterQuery<typeof Product> = {
      $and: [
        { tags: { $in: distinctUserTagIds } }, // Questions with user's tags
        { author: { $ne: user._id } }, // Exclude user's own questions
      ],
    };

    if (searchQuery) {
      query.$or = [
        { title: { $regex: searchQuery, $options: 'i' } },
        { content: { $regex: searchQuery, $options: 'i' } },
      ];
    }

    const totalProducts = await Product.countDocuments(query);

    const recommendedProducts = await Product.find(query)
      .populate({
        path: 'tags',
        model: Tag,
      })
      .populate({
        path: 'author',
        model: User,
      })
      .skip(skipAmount)
      .limit(pageSize);

    const isNext = totalProducts > skipAmount + recommendedProducts.length;

    return { questions: recommendedProducts, isNext };
  } catch (error) {
    console.error('Error getting recommended questions:', error);
    throw error;
  }
}

export async function getProductBySlug(params: any) {
  try {
    await connectToDatabase();

    const { productSlug } = params;

    const product = await Product.findOne({ slug: productSlug })
      .populate({
        path: 'tags',
        model: Tag,
        select: 'id, name',
      })
      .populate({
        path: 'author',
        model: User,
        select: 'id, clerkId, name, picture',
      });

    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Upvote
export async function upVoteProduct(params: ProductVoteParams) {
  try {
    await connectToDatabase();

    const { productId, userId, hasUpVoted, hasDownVoted, path } = params;

    let updateQuery = {};

    if (hasDownVoted) {
      updateQuery = { $pull: { upvotes: userId } };
    } else if (hasDownVoted) {
      updateQuery = {
        $pull: { downVotes: userId },
        $push: { upvotes: userId },
      };
    } else {
      updateQuery = { $addToSet: { upvotes: userId } };
    }

    const product = await Product.findByIdAndUpdate(productId, updateQuery, {
      new: true,
    });

    if (!product) {
      throw new Error('Product not found');
    }

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
// Downvote
export async function downVoteProduct(params: ProductVoteParams) {
  try {
    await connectToDatabase();

    const { productId, userId, hasupVoted, hasdownVoted, path } = params;

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

    const product = await Product.findByIdAndUpdate(productId, updateQuery, {
      new: true,
    });

    if (!product) {
      throw new Error('Product not found');
    }

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getHotProduct() {
  try {
    await connectToDatabase();

    const hotProduct = await Product.find({}).sort({ views: -1, upvotes: -1 });
    return hotProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
}