import { Badge } from '@/components/ui/badge';
import {
  Eye,
  Flame,
  MessageCircle,
  Sparkles,
  ThumbsUp,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link
      href={`/tools/${product.slug}`}
      className="w-full border-b border-muted/50 p-4 hover:bg-card transition-all rounded-xl duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full">
          <Image
            src={product.imageUrl}
            height={100}
            width={100}
            alt="tools"
            priority
            className="aspect-square border p-0.5 object-contain rounded-md w-12 h-12"
          />

          <div className="space-y-0.5 w-full">
            <div className="flex justify-between">
              <p className="font-semibold">{product.name}</p>
              <div className="flex gap-2 items-center">
                <Badge variant="outline" className="text-muted-foreground">
                  {product.status}
                  {product.status === 'Featured' && (
                    <Zap className="ml-0.5 size-3 text-green-500" />
                  )}
                  {product.status === 'Trending' && (
                    <Sparkles className="ml-0.5 size-3 text-violet-500" />
                  )}
                  {product.status === 'New' && (
                    <Flame className="ml-0.5 size-3 text-rose-500" />
                  )}
                </Badge>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{product.title}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2 w-full mt-4">
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex items-center gap-4">
            {product.tags?.slice(0, 2).map((tag: string, i: number) => (
              <Badge
                variant="outline"
                key={i}
                className="text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <ThumbsUp className="size-3" />
              44 Votes
            </p>
            <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <MessageCircle className="size-3" />
              34 Discuss
            </p>
            <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <Eye className="size-3" />
              30 Views
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
