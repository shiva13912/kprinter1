import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      target,
      rel,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:translate-y-0';

    const variants = {
      primary:
        'bg-brand-blue-700 hover:bg-brand-blue-800 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-brand-blue-500',
      secondary:
        'bg-brand-navy-900 hover:bg-brand-navy-950 text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-brand-navy-900',
      outline:
        'border-2 border-brand-blue-700 text-brand-blue-700 bg-transparent hover:bg-brand-blue-50 hover:border-brand-blue-800 hover:text-brand-blue-800 focus-visible:ring-brand-blue-500',
      whatsapp:
        'bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-whatsapp hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-emerald-400 font-semibold',
      ghost:
        'text-slate-700 hover:text-brand-blue-700 hover:bg-slate-100 focus-visible:ring-slate-400',
    };

    const sizes = {
      sm: 'h-9 px-3.5 py-1.5 text-xs gap-1.5',
      md: 'h-11 px-5 py-2.5 text-sm gap-2',
      lg: 'h-13 px-7 py-3.5 text-base gap-2.5',
    };

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
      if (isExternal) {
        return (
          <a
            href={href}
            target={target || (href.startsWith('http') ? '_blank' : undefined)}
            rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
