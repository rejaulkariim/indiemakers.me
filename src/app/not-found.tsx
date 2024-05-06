import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/utils';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">Not Found</h2>
          <p className="paragraph">Could not find requested resource</p>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'destructive' }))}
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
