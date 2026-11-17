import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const hasHome = items.length > 0 && items[0].href === '/';
  const allItems: BreadcrumbItem[] = hasHome ? items : [{ label: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://kakatiyaprinters.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center text-xs text-slate-500 py-3 overflow-x-auto whitespace-nowrap ${className || ''}`}
      >
        <ol className="flex items-center space-x-1.5">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.label} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-slate-400 shrink-0" aria-hidden="true" />
                )}
                {isLast || !item.href ? (
                  <span className="font-semibold text-brand-navy-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue-700 transition-colors flex items-center gap-1 text-slate-600"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 shrink-0" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
