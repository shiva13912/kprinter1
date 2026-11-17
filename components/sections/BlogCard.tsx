import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  readTime: string;
  date?: string;
  tag?: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  imageSrc,
  readTime,
  date = 'Packaging Insights',
  tag,
}: BlogCardProps) {
  const href = `/blogs/${slug}`;

  return (
    <Card hoverEffect borderVariant="subtle" className="flex flex-col h-full overflow-hidden p-0 group">
      {/* Cover Image */}
      <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {tag && (
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-navy-900/90 text-white backdrop-blur-sm shadow-sm">
              {tag}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
            <span>{date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors font-outfit mb-3 line-clamp-2 leading-snug">
            <Link href={href} className="focus:outline-none">
              {title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 font-inter">
            {excerpt}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-700 group-hover:text-brand-blue-800 transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
