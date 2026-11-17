import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'slate' | 'accent' | 'neutral';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export function Badge({
  className,
  variant = 'primary',
  size = 'sm',
  icon,
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-semibold uppercase tracking-wider rounded-full transition-colors';

  const variants = {
    primary: 'bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200/80',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    accent: 'bg-brand-cyan-500/10 text-brand-cyan-600 border border-brand-cyan-500/20',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
