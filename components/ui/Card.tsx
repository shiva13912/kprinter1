import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  borderVariant?: 'subtle' | 'blue' | 'none';
}

export function Card({
  className,
  hoverEffect = false,
  borderVariant = 'subtle',
  children,
  ...props
}: CardProps) {
  const borders = {
    subtle: 'border border-slate-200/80',
    blue: 'border border-brand-blue-100 hover:border-brand-blue-300',
    none: 'border-0',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-subtle p-6 transition-all duration-200',
        borders[borderVariant],
        hoverEffect && 'hover:-translate-y-1 hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
