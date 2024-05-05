'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export const InsufficientCreditsModal = () => {
  const router = useRouter();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <span className="flex justify-between items-center">
            <p className="font-bold">Insufficient Credits</p>
            <AlertDialogCancel
              className="border-0 p-0 hover:bg-transparent"
              onClick={() => router.push('/user/dashboard/profile')}
            >
              <Image
                src="/assets/icons/close.svg"
                alt="credit coins"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </AlertDialogCancel>
          </span>

          <Image
            src="/assets/images/stacked-coins.png"
            alt="credit coins"
            width={462}
            height={122}
          />

          <AlertDialogTitle className="font-bold">
            Oops.... Looks like you&#39;ve run out of free credits!
          </AlertDialogTitle>

          <AlertDialogDescription className="paragraph py-3">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => router.push('/user/dashboard/profile')}
          >
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => router.push('/user/dashboard/credits')}
          >
            Yes, Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
