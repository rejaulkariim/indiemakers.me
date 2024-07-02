import { Badge } from '@/components/ui/badge'

interface Props {
  _id: string
  name: string
  totalQuestions?: number
  showCount?: boolean
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <div className='flex justify-between gap-2'>
      <Badge
        variant='outline'
        className='inline-flex items-center rounded-full border bg-accent px-2.5 py-0.5 text-[10px] font-medium uppercase text-primary'
      >
        {name}
      </Badge>

      {showCount && <p className='text-primary'>{totalQuestions}</p>}
    </div>
  )
}

export default RenderTag
