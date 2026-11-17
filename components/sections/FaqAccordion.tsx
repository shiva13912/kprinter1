'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
  allowMultiple?: boolean;
}

export function FaqAccordion({ items, className, allowMultiple = false }: FaqAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className={cn('w-full max-w-3xl mx-auto space-y-3', className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const id = `faq-${index}`;

        return (
          <div
            key={index}
            className={cn(
              'border rounded-xl bg-white overflow-hidden transition-all duration-200',
              isOpen ? 'border-brand-blue-300 shadow-sm' : 'border-slate-200/80 hover:border-slate-300'
            )}
          >
            <button
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
              id={`${id}-trigger`}
              className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-slate-900 hover:text-brand-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 font-outfit"
            >
              <span className="text-base sm:text-lg pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200',
                  isOpen && 'rotate-180 text-brand-blue-700'
                )}
              />
            </button>

            {isOpen && (
              <div
                id={`${id}-content`}
                role="region"
                aria-labelledby={`${id}-trigger`}
                className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-inter border-t border-slate-100"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
