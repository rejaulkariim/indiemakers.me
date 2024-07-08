import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex-grow-0 bg-background'>
      <MaxWidthWrapper>
        <div className='border-t'>
          <div className='my-10 space-y-2'>
            <h3 className='mb-2 font-bold'>Links</h3>
            <Link href='/blog'>Blogs</Link>
          </div>
        </div>
        <div className='py-8 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='/terms'
                className='text-sm text-muted-foreground hover:text-foreground'
              >
                Terms
              </Link>
              <Link
                href='/privacy'
                className='text-sm text-muted-foreground hover:text-foreground'
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
