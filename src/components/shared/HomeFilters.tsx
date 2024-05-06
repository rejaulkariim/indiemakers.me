'use client';

import { HomePageFilters } from '@/constants/filter';
import { formUrlQuery } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '../ui/badge';

const HomeFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState('');

  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive('');

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: null,
      });

      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'filter',
        value: item.toLowerCase(),
      });

      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <div className="hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Badge
          variant="outline"
          key={item.value}
          onClick={() => {}}
          className={`cursor-pointer text-muted-foreground ${
            active === item.value
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted'
          }`}
          onClickCapture={() => handleTypeClick(item.value)}
        >
          {item.name}
        </Badge>
      ))}
    </div>
  );
};

export default HomeFilters;
