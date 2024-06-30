import { ICategory } from '@/server/modules/category/category.interface'
import { Schema, model, models } from 'mongoose'

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
})

export const Category =
  models.Category || model<ICategory>('Category', CategorySchema)
