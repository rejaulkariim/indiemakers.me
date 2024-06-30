import { z } from 'zod'

export const createCategoryValidationSchema = z.object({
  name: z.string().min(3).max(20)
})
