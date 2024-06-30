'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { toast } from '@/components/ui/use-toast'
import {
  downVoteComment,
  upVoteComment
} from '@/server/modules/comment/comment.action'
import { viewProduct } from '@/server/modules/interaction/interaction.action'
import {
  downVoteProduct,
  upVoteProduct
} from '@/server/modules/product/product.action'
import { toggleSaveProduct } from '@/server/modules/user/user.actions'
import { formatAndDivideNumber } from '@/utils/utils'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface Props {
  type: string
  itemId: string
  userId: string
  upvotes: number
  hasupVoted: boolean
  downvotes: number
  hasdownVoted: boolean
  hasSaved?: boolean
}

const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasupVoted,
  downvotes,
  hasdownVoted,
  hasSaved
}: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  // Save product handler
  const handleSave = async () => {
    if (!userId) {
      return toast({
        title: 'Please log in',
        description: 'You must be logged in to perform this action'
      })
    }

    await toggleSaveProduct({
      userId: JSON.parse(userId),
      productId: JSON.parse(itemId),
      path: pathname
    })

    return toast({
      title: `Product ${
        !hasSaved ? 'Saved in' : 'Removed from'
      } your collection`,
      variant: !hasSaved ? 'default' : 'destructive'
    })
  }

  // Votes handler
  const handleVote = async (action: string) => {
    if (!userId) {
      return toast({
        title: 'Please log in',
        description: 'You must be logged in to perform this action'
      })
    }

    if (action === 'upvote') {
      if (type === 'Product') {
        await upVoteProduct({
          productId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname
        })
      } else if (type === 'Comment') {
        await upVoteComment({
          commentId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname
        })
      }

      return toast({
        title: `Upvote ${!hasupVoted ? 'Successful' : 'Removed'}`,
        variant: !hasupVoted ? 'default' : 'destructive'
      })
    }

    if (action === 'downvote') {
      if (type === 'Product') {
        await downVoteProduct({
          productId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname
        })
      } else if (type === 'Comment') {
        await downVoteComment({
          commentId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname
        })
      }

      return toast({
        title: `Downvote ${!hasupVoted ? 'Successful' : 'Removed'}`,
        variant: !hasupVoted ? 'default' : 'destructive'
      })
    }
  }

  // Product Views
  useEffect(() => {
    viewProduct({
      productId: JSON.parse(itemId),
      userId: userId ? JSON.parse(userId) : undefined
    })
  }, [itemId, userId, pathname, router])

  return (
    <div className='flex items-center gap-2.5'>
      <TooltipProvider>
        {/* Upvotes */}
        <Tooltip>
          <TooltipTrigger>
            <div className='flex items-center gap-1.5'>
              <div className='flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:bg-accent'>
                <Image
                  src={
                    hasupVoted
                      ? '/assets/icons/upvoted.svg'
                      : '/assets/icons/upvote.svg'
                  }
                  width={18}
                  height={18}
                  alt='upvote'
                  className='cursor-pointer'
                  onClick={() => handleVote('upvote')}
                />
              </div>

              <div className='flex-center min-w-[18px] rounded-sm p-1'>
                <p className='font-bold'>{formatAndDivideNumber(upvotes)}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className='bg-accent px-2.5 py-0.5' side='top'>
            <p className='text-xs'>Upvotes</p>
          </TooltipContent>
        </Tooltip>

        {/* Downvotes */}
        <Tooltip>
          <TooltipTrigger>
            <div className='flex items-center gap-1.5'>
              <div className='flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:bg-accent'>
                <Image
                  src={
                    hasdownVoted
                      ? '/assets/icons/downvoted.svg'
                      : '/assets/icons/downvote.svg'
                  }
                  width={18}
                  height={18}
                  alt='downvote'
                  className='cursor-pointer'
                  onClick={() => handleVote('downvote')}
                />
              </div>

              <div className='flex-center min-w-[18px] rounded-sm p-1'>
                <p className='font-bold'>{formatAndDivideNumber(downvotes)}</p>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className='bg-accent px-2.5 py-0.5' side='top'>
            <p className='text-xs'>Downvotes</p>
          </TooltipContent>
        </Tooltip>

        {/* Save to collection */}
        <Tooltip>
          <TooltipTrigger>
            {type === 'Product' && (
              <div className='flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:bg-accent'>
                <Image
                  src={
                    hasSaved
                      ? '/assets/icons/star-filled.svg'
                      : '/assets/icons/star-red.svg'
                  }
                  width={18}
                  height={18}
                  alt='star'
                  className='cursor-pointer'
                  onClick={handleSave}
                />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent className='bg-accent px-2.5 py-0.5' side='top'>
            <p className='text-xs'>Save to collection</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default Votes
