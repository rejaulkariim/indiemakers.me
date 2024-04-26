import { cn } from '@/utils/utils';
import React from 'react';

const DashboardWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`max-w-screen-lg mx-auto`, className)}>{children}</div>
  );
};

export default DashboardWrapper;
