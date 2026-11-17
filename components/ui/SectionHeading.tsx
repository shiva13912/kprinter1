import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  badgeVariant?: 'primary' | 'success' | 'warning' | 'slate' | 'accent';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  centered?: boolean;
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  badgeIcon,
  badgeVariant = 'primary',
  title,
  subtitle,
  align = 'center',
  centered,
  invert = false,
  className,
}: SectionHeadingProps) {
  const isCenter = centered !== undefined ? centered : align === 'center';

  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-4 flex', isCenter ? 'justify-center' : 'justify-start')}>
          <Badge variant={badgeVariant} icon={badgeIcon} size="md">
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight font-outfit leading-tight mb-4',
          invert ? 'text-white' : 'text-brand-navy-900'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed font-inter',
            invert ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
