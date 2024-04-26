'use server';

import { contactFormValidationSchema } from '@/lib/validations/contact';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  data: z.infer<typeof contactFormValidationSchema>
) {
  const result = contactFormValidationSchema.safeParse(data);

  if (result.success) {
    const { name, email, message } = result.data;

    try {
      const data = await resend.emails.send({
        from: 'Supercharge <onboarding@resend.dev>',
        to: ['rejaulkarim66666@gmail.com'],
        subject: 'Contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        // react: EmailTemplate({ name, email, message }) as ReactElement,
      });

      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { sucess: false, error: result.error.format() };
  }
}
