'use client';

import Checkout from '@/components/checkout/Checkout';
import { Button } from '@/components/ui/button';
import { TStripePlan } from '@/types';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import Link from 'next/link';

const CheckoutButton = ({ plan }: { plan: TStripePlan }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <>
      <SignedOut>
        <Button
          asChild
          type="submit"
          role="link"
          size="lg"
          className="button w-full sm:w-full"
        >
          <Link href="/sign-in">Buy App Brews</Link>
        </Button>
      </SignedOut>

      <SignedIn>
        <Checkout plan={plan} userId={userId} />
      </SignedIn>
    </>
  );
};

export default CheckoutButton;
