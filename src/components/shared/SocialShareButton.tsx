'use client'

import { TwitterIcon, TwitterShareButton } from 'react-share'

const SocialShareButton = ({
  name,
  title,
  slug
}: {
  name: string
  title: string
  slug: string
}) => {
  const hashtags = ['indiehackers', 'buildinpublic']
  const related = ['indieMakersQH', 'rejaulkariim']

  return (
    <TwitterShareButton
      title={`${name}: ${title} via @IndieMakersMe`}
      url={`https://indiemakers.me/product/${slug}`}
      hashtags={hashtags}
      related={related}
    >
      <TwitterIcon className='h-3 w-3 fill-current' />
      <span className='sr-only'>Twitter</span>
    </TwitterShareButton>
  )
}

export default SocialShareButton
