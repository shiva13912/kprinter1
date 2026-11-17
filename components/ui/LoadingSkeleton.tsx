import React from 'react';
import { cn } from '@/lib/utils';

export interface LoadingSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'rect' | 'circle';
}

export function LoadingSkeleton({
  className,
  variant = 'rect',
  ...props
}: LoadingSkeletonProps) {
  const variants = {
    text: 'h-4 w-full rounded',
    rect: 'rounded-xl',
    circle: 'rounded-full',
  };

  return (
    <div
      className={cn('animate-pulse bg-slate-200/80', variants[variant], className)}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-5 space-y-4">
      <LoadingSkeleton className="aspect-square w-full" />
      <LoadingSkeleton variant="text" className="w-1/3 h-3" />
      <LoadingSkeleton variant="text" className="w-3/4 h-5" />
      <LoadingSkeleton variant="text" className="w-full h-4" />
      <LoadingSkeleton variant="text" className="w-1/2 h-4" />
    </div>
  );
}
