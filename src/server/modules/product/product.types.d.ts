import { IUser } from '@/server/modules/user/user.model'

export interface CreateProductParams {
  name: string
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  website: string
  logo: string
  author: Schema.Types.ObjectId | IUser
  path: string
}
