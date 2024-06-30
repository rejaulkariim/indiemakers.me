'use server'

import { Category } from '@/server/modules/category/category.model'
import { connectToDatabase } from '@/server/mongoose'
import { CreateCategoryParams } from '@/types'
import slugify from 'slugify'

// Create category
export const createCategory = async ({
  categoryName
}: CreateCategoryParams) => {
  try {
    await connectToDatabase()

    // Generate slug from categoryName
    const slug = slugify(categoryName, { lower: true })

    const newCategory = await Category.create({ name: categoryName, slug })

    return JSON.parse(JSON.stringify(newCategory))
  } catch (error) {
    console.log(error)
  }
}

// Get all category
export const getAllCategories = async () => {
  try {
    await connectToDatabase()

    const categories = await Category.find()

    return JSON.parse(JSON.stringify(categories))
  } catch (error) {
    console.log(error)
  }
}
