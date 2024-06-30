'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { createNewsletter } from '@/server/modules/newsletter/newsletter.action';
import { newsletterValidationSchema } from '@/lib/validations/newsletter.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const NewsletterForm = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Define the form.
  const form = useForm<z.infer<typeof newsletterValidationSchema>>({
    resolver: zodResolver(newsletterValidationSchema),
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = async (
    values: z.infer<typeof newsletterValidationSchema>
  ) => {
    setIsSubmitting(true);

    try {
      // Make an async call to API -> to subscribe newsletter
      const res = await createNewsletter({ email: values.email });

      console.log(res, 'res from newsletter');
      if (res.success) {
        form.reset();
        toast({ title: 'Success ✅', description: res.message });
      } else {
        toast({ title: 'Unsuccessful ❌', description: res.message });
      }
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Email address"
                  className="max-w-2xl text-sm no-focus border shadow-none outline-none focus-visible:border-2"
                />
              </FormControl>

              <FormMessage className="text-start text-red-500" />
            </FormItem>
          )}
        />
        <Button className="mt-4 w-full">
          {isSubmitting ? <Loader2 className="animate-spin" /> : 'Join now'}
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
