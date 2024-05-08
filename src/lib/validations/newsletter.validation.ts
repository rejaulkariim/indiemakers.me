import * as z from 'zod';

export const newsletterValidationSchema = z.object({
  email: z.string().email(),
});
