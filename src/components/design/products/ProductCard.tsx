import Metric from '@/components/shared/Metric';
import RenderTag from '@/components/shared/RenderTag';
import { formatAndDivideNumber } from '@/utils/utils';
import { Flame, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductProps {
  name: string;
  slug: string;
  title: string;
  image: string;
  status: string;
  tags: {
    _id: string;
    name: string;
  }[];
  upvotes: string[];
  views: number;
  comments: Array<object>;
}

const ProductCard = ({
  name,
  slug,
  title,
  image,
  tags,
  status,
  upvotes,
  views,
  comments,
}: ProductProps) => {
  return (
    <div className="w-full border-b border-muted/50 p-4 hover:bg-accent transition-all rounded-xl duration-300">
      <Link
        href={`/product/${slug}`}
        className="flex items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4 w-full">
          <Image
            src={image}
            height={100}
            width={100}
            alt="tools"
            priority
            className="aspect-square border p-0.5 object-contain rounded-md w-12 h-12"
          />

          <div className="space-y-0.5 w-full">
            <div className="flex justify-between">
              <p className="font-semibold">{name}</p>
              <div className="flex gap-2 items-center">
                <span className="border rounded-full px-3 py-1 text-xs text-muted-foreground inline-flex items-center gap-1">
                  {status === 'FEATURED' && (
                    <Zap className="size-3 text-green-500" />
                  )}
                  {status === 'TRENDING' && (
                    <Flame className="size-3 text-violet-500" />
                  )}
                  {status === 'NEW' && (
                    <Sparkles className="size-3.5 text-rose-500" />
                  )}
                  {status}
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </Link>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 w-full mt-3.5">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={formatAndDivideNumber(upvotes.length)}
            title=" Votes"
            textStyles="text-xs text-muted-foreground"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatAndDivideNumber(comments.length)}
            title="Comments"
            textStyles="text-xs text-muted-foreground"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatAndDivideNumber(views)}
            title=" Views"
            textStyles="text-xs text-muted-foreground"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
