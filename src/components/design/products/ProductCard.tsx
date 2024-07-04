import Metric from '@/components/shared/Metric'
import RenderTag from '@/components/shared/RenderTag'
import { Badge } from '@/components/ui/badge'
import { formatAndDivideNumber } from '@/utils/utils'
import { Flame, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  name: string
  slug: string
  title: string
  logo: string
  status: string
  tags: {
    _id: string
    name: string
  }[]
  upvotes: string[]
  views: number
  comments: Array<object>
}

const ProductCard = ({
  name,
  slug,
  title,
  logo,
  tags,
  status,
  upvotes,
  views,
  comments
}: ProductProps) => {
  return (
    <div className='group w-full rounded-xl border bg-card p-2.5 shadow-sm transition-all duration-300 hover:bg-card'>
      <Link
        href={`/product/${slug}`}
        className='flex items-center justify-between gap-6'
      >
        <div className='flex w-full items-center gap-x-4'>
          <Image
            src={logo}
            height={100}
            width={100}
            alt='tools'
            priority
            className='aspect-square h-14 w-14 rounded-lg border object-contain'
          />

          <div className='w-full space-y-0.5'>
            <div className='flex justify-between'>
              <p className='font-bold'>{name}</p>
              <Badge
                variant='outline'
                className='inline-flex items-center rounded-full border px-3 py-0.5 text-[10px] font-medium uppercase text-primary'
              >
                {status === 'FEATURED' && (
                  <Zap className='mr-1 size-3 text-green-500' />
                )}
                {status === 'TRENDING' && (
                  <Flame className='mr-1 size-3 text-violet-500' />
                )}
                {status === 'NEW' && (
                  <Sparkles className='mr-1 size-3 text-rose-500' />
                )}
                {status}
              </Badge>
            </div>
            <p className='text-sm text-muted-foreground'>{title}</p>
          </div>
        </div>
      </Link>
      <div className='mt-2 space-y-2'>
        <div className='mt-2 flex flex-wrap gap-x-2'>
          {tags.map(tag => (
            <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
          ))}
        </div>

        <div className='flex items-center gap-3'>
          <Metric
            imgUrl='/assets/icons/eye.svg'
            alt='eye'
            value={formatAndDivideNumber(views)}
            title=' Views'
            textStyles='text-xs text-muted-foreground'
          />
          <Metric
            imgUrl='/assets/icons/message.svg'
            alt='message'
            value={formatAndDivideNumber(comments.length)}
            title='Comments'
            textStyles='text-xs text-muted-foreground'
          />
          <Metric
            imgUrl='/assets/icons/like.svg'
            alt='Upvotes'
            value={formatAndDivideNumber(upvotes.length)}
            title=' Votes'
            textStyles='text-xs text-muted-foreground'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
