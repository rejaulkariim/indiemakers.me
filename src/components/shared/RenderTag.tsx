import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        variant="outline"
        className="text-[10px] inline-flex items-center text-muted-foreground font-medium rounded-full border px-2.5 py-0.5 uppercase"
      >
        {name}
      </Badge>

      {showCount && <p className="">{totalQuestions}</p>}
    </Link>
  );
};

export default RenderTag;
