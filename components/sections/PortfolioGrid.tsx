'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { portfolioItems, portfolioCategories, PortfolioItem } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems =
    selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {portfolioCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-brand-blue-700 text-white shadow-md shadow-brand-blue-900/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Item Counter */}
      <div className="mt-8 text-center text-sm text-slate-500">
        Showing <span className="font-bold text-slate-900">{filteredItems.length}</span> verified
        packaging solutions
      </div>

      {/* Grid of Portfolio Cards */}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition hover:shadow-xl hover:border-brand-blue-300"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="primary" className="bg-brand-blue-900/90 text-white backdrop-blur-sm">
                  {item.categoryLabel}
                </Badge>
              </div>
              <div className="absolute top-3 right-3">
                <Badge variant="neutral" className="bg-white/95 text-slate-800 backdrop-blur-sm">
                  {item.industry}
                </Badge>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-outfit text-xl font-bold text-slate-900 group-hover:text-brand-blue-700 transition">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Finishes Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.finishes.map((finish, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
                  >
                    {finish}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={companyInfo.contact.whatsappUrl(
                    `Hello Kakatiya Printers, I am interested in custom packaging similar to: ${item.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="whatsapp"
                    size="sm"
                    className="w-full justify-center"
                    leftIcon={<MessageCircle className="h-4 w-4" />}
                  >
                    Quote on WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
