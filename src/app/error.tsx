'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-2">
      <h2 className="font-semibold">Something went wrong!</h2>
      <Button variant="destructive" onClick={() => reset()}>
        Try again
      </Button>
    </section>
  );
}
