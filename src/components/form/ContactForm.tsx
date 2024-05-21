'use client';

import { Icons } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/lib/actions/send.email';
import { contactFormValidationSchema } from '@/lib/validations/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormValidationSchema>>({
    resolver: zodResolver(contactFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Submit handler with server action
  const onSubmit = async (
    data: z.infer<typeof contactFormValidationSchema>
  ) => {
    try {
      setIsSubmitting(true);
      const result = await sendEmail(data);

      if (result?.data) {
        toast.success('Email sent successfully!');
        form.reset();
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error('Someting went wrong');
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Name"
                    className="border border-input bg-accent px-3 py-1 text-sm text-muted-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="example@gmail.com"
                    className="border border-input bg-accent px-3 py-1 text-sm text-muted-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Your message"
                    className="border border-input h-36 bg-accent px-3 py-3 text-sm text-muted-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isSubmitting ? (
              <>
                <Icons.spinner className="size-5 animate-spin mr-2" />
                Submitting
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
