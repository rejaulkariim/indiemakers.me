import { Schema } from 'mongoose'

export interface IProduct {
  name: string
  slug: string
  title: string
  category: Schema.Types.ObjectId
  logo: string
  website: string
  description: string
  tags: Schema.Types.ObjectId[]
  views: number
  upvotes: Schema.Types.ObjectId[]
  downvotes: Schema.Types.ObjectId[]
  author: Schema.Types.ObjectId
  status: string
  comments: Schema.Types.ObjectId[]
  createdAt: Date
}
