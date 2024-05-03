import { IUser } from '../database/models/user.model';

export interface GetProductParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
}

export interface CreateProductParams {
  name: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  website: string;
  image: string;
  author: Schema.Types.ObjectId | IUser;
  path: string;
}
