import * as z from 'zod';

export const productValidationSchema = z.object({
  name: z.string().min(3).max(60),
  title: z.string().min(10).max(70),
  description: z.string().min(100).max(2000),
  website: z.string().url(),
  image: z.string(),
  tags: z.array(z.string()).min(1).max(3),
});
