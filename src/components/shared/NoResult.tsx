interface Props {
  emptyTitle: string
  emptyStateSubtext: string
}

const NoResult = ({ emptyTitle, emptyStateSubtext }: Props) => {
  return (
    <div className='w-full rounded-lg border bg-card/20 py-20 text-center'>
      <h3 className='text-xl font-bold'>{emptyTitle}</h3>
      <p>{emptyStateSubtext}</p>
    </div>
  )
}

export default NoResult
