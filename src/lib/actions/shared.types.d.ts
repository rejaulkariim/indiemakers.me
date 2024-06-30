export interface GetProductParams {
  page?: number
  pageSize?: number
  searchQuery?: string
  filter?: string
}

export interface ProductVoteParams {
  productId: string
  userId: string
  hasupVoted: boolean
  hasdownVoted: boolean
  path: string
}

export interface ViewProductParams {
  productId: string
  userId: string | undefined
}

export interface CreateCommentParams {
  content: string
  author: string
  product: string
  path: string
}
export interface GetCommentParams {
  productId: string
  sortBy?: string
  page?: number
  pageSize?: number
}
export interface CommentVoteParams {
  commentId: string
  userId: string
  hasupVoted: boolean
  hasdownVoted: boolean
  path: string
}

export interface CommentVoteParams {
  commentId: string
  userId: string
  hasupVoted: boolean
  hasdownVoted: boolean
  path: string
}
export interface ToggleSaveProductParams {
  userId: string
  productId: string
  path: string
}

export interface GetProductBySlugParams {
  slug: string
}
export interface CreateNewsletterParams {
  email: string
}
