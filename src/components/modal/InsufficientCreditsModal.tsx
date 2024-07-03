'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { REGISTRATION } from '@/constants'
import Checkout from '../checkout/Checkout'
import { Icons } from '../shared/Icons'

export const InsufficientCreditsModal = ({
  mongoUserId
}: {
  mongoUserId: string
}) => {
  const router = useRouter()

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <span className='flex items-center justify-between'>
            <AlertDialogCancel
              className='border-0 p-0 hover:bg-transparent'
              onClick={() => router.push('/user/dashboard/profile')}
            >
              <Image
                src='/assets/icons/close.svg'
                alt='credit coins'
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </AlertDialogCancel>
          </span>

          <Icons.billing />

          <AlertDialogTitle className='font-bold'>
            Pay the $5 registration fee
            {/* We are working on this page */}
          </AlertDialogTitle>

          <AlertDialogDescription className='paragraph py-3'>
            A one-time registration fee is required in order to register your
            account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => router.push('/')}>
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction>
            <Checkout
              amount={REGISTRATION.fee}
              name={REGISTRATION.name}
              buyerId={mongoUserId}
            />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
