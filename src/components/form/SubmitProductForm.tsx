'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Editor } from '@tinymce/tinymce-react';

import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FileUploader } from '@/components/fileUploader/FileUploader';
import { Badge } from '@/components/ui/badge';
import { creditFee } from '@/constants';
import { createProduct } from '@/lib/actions/product.action';
import { updateCredits } from '@/lib/actions/user.actions';
import { useUploadThing } from '@/lib/uploadthing/uploadthing';
import { productValidationSchema } from '@/lib/validations/product.validation';
import { X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import slugify from 'slugify';
import { InsufficientCreditsModal } from '../modal/InsufficientCreditsModal';

const type: any = 'create';

interface Props {
  mongoUserId: string;
  creditBalance: number;
}

const SubmitProductForm = ({ mongoUserId, creditBalance }: Props) => {
  const editorRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const { startUpload } = useUploadThing('imageUploader');

  // 1. Define the form.
  const form = useForm<z.infer<typeof productValidationSchema>>({
    resolver: zodResolver(productValidationSchema),
    defaultValues: {
      name: '',
      title: '',
      description: '',
      website: '',
      image: '',
      tags: [],
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof productValidationSchema>) => {
    setIsSubmitting(true);

    let uploadedImageUrl = values.image;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    try {
      // Make an async call to API -> to create a new product
      const newProduct = await createProduct({
        name: values.name,
        slug: slugify(values.name, { lower: true }),
        title: values.title,
        description: values.description,
        tags: values.tags,
        website: values.website,
        image: uploadedImageUrl,
        author: JSON.parse(mongoUserId),
        path: pathname,
      });

      await updateCredits(JSON.parse(mongoUserId), creditFee);

      console.log(newProduct);

      router.push('/');
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag must be less than 12 characters.',
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue('tags', [...field.value, tagValue]);
          tagInput.value = '';
          form.clearErrors('tags');
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);

    form.setValue('tags', newTags);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-8"
      >
        {creditBalance < Math.abs(creditFee) && <InsufficientCreditsModal />}
        {/* Product Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Tool Name <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border h-12 text-muted-foreground"
                />
              </FormControl>
              <FormDescription>This is your tool name</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border h-12 text-muted-foreground"
                />
              </FormControl>
              <FormDescription>
                A short description of your product max 70 characters
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Descriptions */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tool Descriptions</FormLabel>
              <FormControl>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue=""
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                    ],
                    toolbar:
                      'undo redo | ' +
                      'styles | bold italic forecolor | alignleft aligncenter |' +
                      'alignright alignjustify | bullist numlist',
                    // toolbar: 'undo redo | styles | bold italic',
                    content_style: 'body { font-family:Inter; font-size:16px}',
                    skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
                    content_css: theme === 'dark' ? 'dark' : 'light',
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Max 2000 characters. Note that only the first ~100 characters
                will show up in search results.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Website */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Website <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border h-12 text-muted-foreground"
                />
              </FormControl>
              <FormDescription>This is your tool name</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Image URL */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Image <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl>
                <FileUploader
                  onFieldChange={field.onChange}
                  imageUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormDescription>Add a logo of your app</FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Tags */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="">
                Tags <span className="text-amber-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    disabled={type === 'Update'}
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                    className="border h-12 text-muted-foreground"
                  />

                  {field.value.length > 0 && (
                    <div className="flex justify-start items-start mt-2.5 gap-2.5">
                      {field.value.map((tag: any) => (
                        <Badge
                          key={tag}
                          className="bg-accent hover:bg-accent/80 text-foreground flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize cursor-pointer"
                          onClick={() =>
                            type !== 'Update'
                              ? handleTagRemove(tag, field)
                              : () => {}
                          }
                        >
                          {tag}
                          {type !== 'Update' && <X className="size-4" />}
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>{type === 'Edit' ? 'Editing...' : 'Posting...'}</>
          ) : (
            <>{type === 'Edit' ? 'Edit Product' : 'Submit Product'}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SubmitProductForm;
