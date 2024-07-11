'use server'

import {
  GetProductBySlugParams,
  GetProductParams,
  ProductVoteParams
} from '@/lib/actions/shared.types'
import Interaction from '@/server/modules/interaction/interaction.model'
import Product from '@/server/modules/product/product.model'
import { CreateProductParams } from '@/server/modules/product/product.types'
import Tag from '@/server/modules/tag/tag.model'
import User from '@/server/modules/user/user.model'
import { connectToDatabase } from '@/server/mongoose'
import { FilterQuery } from 'mongoose'
import { revalidatePath } from 'next/cache'

// Create new products
export async function createProduct(payload: CreateProductParams) {
  console.log(payload, 'payload')
  try {
    await connectToDatabase()

    const {
      name,
      slug,
      title,
      category,
      description,
      tags,
      website,
      logo,
      author,
      path
    } = payload

    const newProduct = await Product.create({
      name,
      title,
      category,
      slug,
      description,
      author,
      website,
      logo
    })

    const tagDocuments = []

    // Create a tag or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { products: newProduct._id } },
        { upsert: true, new: true }
      )
      tagDocuments.push(existingTag._id)
    }

    await Product.findByIdAndUpdate(newProduct._id, {
      $push: { tags: { $each: tagDocuments } }
    })

    return JSON.parse(JSON.stringify(newProduct))
  } catch (error) {
    console.log(error)
  }
}

// Get all products
export async function getProducts(params: GetProductParams) {
  try {
    await connectToDatabase()

    const { searchQuery, filter } = params

    const query: FilterQuery<typeof Product> = {}

    if (searchQuery) {
      query.$or = [
        { name: { $regex: new RegExp(searchQuery, 'i') } },
        { title: { $regex: new RegExp(searchQuery, 'i') } },
        { description: { $regex: new RegExp(searchQuery, 'i') } }
      ]
    }

    let sortOptions = {}

    switch (filter) {
      case 'frequent':
        sortOptions = { views: -1 }
        break
      case 'featured':
        query.status = 'FEATURED'
        break
      case 'new':
        query.status = 'NEW'
        break

      default:
        break
    }

    const products = await Product.find(query)
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 })
      .sort(sortOptions)

    return JSON.parse(JSON.stringify(products))
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Get all products for dynamic sitemap
export async function getAllProducts() {
  try {
    await connectToDatabase()

    const products = await Product.find()

    return JSON.parse(JSON.stringify(products))
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function getRecommendedProducts(params: any) {
  try {
    await connectToDatabase()

    const { userId, page = 1, pageSize = 20, searchQuery } = params

    // find user
    const user = await User.findOne({ clerkId: userId })

    if (!user) {
      throw new Error('user not found')
    }

    const skipAmount = (page - 1) * pageSize

    // Find the user's interactions
    const userInteractions = await Interaction.find({ user: user._id })
      .populate('tags')
      .exec()

    // Extract tags from user's interactions
    const userTags = userInteractions.reduce((tags, interaction) => {
      if (interaction.tags) {
        tags = tags.concat(interaction.tags)
      }
      return tags
    }, [])

    // Get distinct tag IDs from user's interactions
    const distinctUserTagIds = [
      // @ts-ignore
      ...new Set(userTags.map((tag: any) => tag._id))
    ]

    const query: FilterQuery<typeof Product> = {
      $and: [
        { tags: { $in: distinctUserTagIds } }, // Questions with user's tags
        { author: { $ne: user._id } } // Exclude user's own questions
      ]
    }

    if (searchQuery) {
      query.$or = [
        { title: { $regex: searchQuery, $options: 'i' } },
        { content: { $regex: searchQuery, $options: 'i' } }
      ]
    }

    const totalProducts = await Product.countDocuments(query)

    const recommendedProducts = await Product.find(query)
      .populate({
        path: 'tags',
        model: Tag
      })
      .populate({
        path: 'author',
        model: User
      })
      .skip(skipAmount)
      .limit(pageSize)

    const isNext = totalProducts > skipAmount + recommendedProducts.length

    return { questions: recommendedProducts, isNext }
  } catch (error) {
    console.error('Error getting recommended questions:', error)
    throw error
  }
}

// Get product by slug
export async function getProductBySlug(params: GetProductBySlugParams) {
  try {
    await connectToDatabase()

    const { slug } = params

    const product = await Product.findOne({ slug: slug })
      .populate({
        path: 'tags',
        model: Tag,
        select: 'id name'
      })
      .populate({
        path: 'author',
        model: User,
        select: 'id clerkId name photo'
      })
      .populate({
        path: 'upvotes',
        model: User,
        select: 'id username photo'
      })

    return product
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Upvote on product
export async function upVoteProduct(params: ProductVoteParams) {
  try {
    await connectToDatabase()

    const { productId, userId, hasupVoted, hasdownVoted, path } = params

    let updateQuery = {}

    if (hasupVoted) {
      updateQuery = { $pull: { upvotes: userId } }
    } else if (hasdownVoted) {
      updateQuery = {
        $pull: { downvotes: userId },
        $push: { upvotes: userId }
      }
    } else {
      updateQuery = { $addToSet: { upvotes: userId } }
    }

    const product = await Product.findByIdAndUpdate(productId, updateQuery, {
      new: true
    })

    if (!product) {
      throw new Error('Product not found')
    }

    revalidatePath(path)
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Downvote product
export async function downVoteProduct(params: ProductVoteParams) {
  try {
    await connectToDatabase()

    const { productId, userId, hasupVoted, hasdownVoted, path } = params

    let updateQuery = {}

    if (hasdownVoted) {
      updateQuery = { $pull: { downvotes: userId } }
    } else if (hasupVoted) {
      updateQuery = {
        $pull: { upvotes: userId },
        $push: { downvotes: userId }
      }
    } else {
      updateQuery = { $addToSet: { downvotes: userId } }
    }

    const product = await Product.findByIdAndUpdate(productId, updateQuery, {
      new: true
    })

    if (!product) {
      throw new Error('Product not found')
    }

    revalidatePath(path)
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Get hot product
export async function getHotProduct() {
  try {
    await connectToDatabase()

    const hotProduct = await Product.find({}).sort({ views: -1, upvotes: -1 })
    return hotProduct
  } catch (error) {
    console.log(error)
    throw error
  }
}

// Get featured product
export async function getFeaturedProduct() {
  try {
    await connectToDatabase()

    const hotProduct = await Product.find({}).sort({ views: -1, upvotes: -1 })
    return hotProduct
  } catch (error) {
    console.log(error)
    throw error
  }
}
