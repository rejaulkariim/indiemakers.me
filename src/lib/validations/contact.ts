import * as z from 'zod';

export const contactFormValidationSchema = z.object({
  // Validating name field
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(20, { message: 'Name cannot exceed 20 characters' }),

  // Validating email field
  email: z.string().email({ message: 'Please provide a valid email address' }),

  // Validating message field
  message: z
    .string()
    .min(3, { message: 'Message must be at least 3 characters long' })
    .max(1200, { message: 'Message cannot exceed 1200 characters' }),
});
