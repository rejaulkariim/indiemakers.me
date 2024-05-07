import Metric from '@/components/shared/Metric';
import RenderTag from '@/components/shared/RenderTag';
import { Badge } from '@/components/ui/badge';
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
    <div className="group w-full p-3 hover:bg-card transition-all rounded-xl duration-300 shadow-sm border-b border-muted/40">
      <Link
        href={`/product/${slug}`}
        className="flex items-center justify-between gap-6"
      >
        <div className="flex items-center gap-x-4 w-full">
          <Image
            src={image}
            height={100}
            width={100}
            alt="tools"
            priority
            className="aspect-square border object-contain rounded-lg w-12 h-12"
          />

          <div className="space-y-0.5 w-full ">
            <div className="flex justify-between">
              <p className="font-bold">{name}</p>
              <Badge
                variant="outline"
                className="text-[10px] inline-flex items-center text-muted-foreground font-medium rounded-full border px-3 py-0.5 uppercase"
              >
                {status === 'FEATURED' && (
                  <Zap className="size-3 mr-1 text-green-500" />
                )}
                {status === 'TRENDING' && (
                  <Flame className="size-3 mr-1 text-violet-500" />
                )}
                {status === 'NEW' && (
                  <Sparkles className="size-3 mr-1 text-rose-500" />
                )}
                {status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 w-full">
        <div className="flex flex-wrap gap-x-2 mt-2">
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
