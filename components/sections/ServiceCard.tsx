import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  badge?: string;
  imageSrc?: string;
  features?: string[];
  ctaLabel?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  badge,
  imageSrc,
  features,
  ctaLabel = 'Explore Technical Specs',
}: ServiceCardProps) {
  return (
    <Card hoverEffect borderVariant="subtle" className="flex flex-col h-full overflow-hidden p-0 group">
      {/* Top Image Preview if available */}
      {imageSrc && (
        <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {badge && (
            <div className="absolute top-3 left-3">
              <Badge variant="primary" size="sm" className="shadow-sm bg-white/95 backdrop-blur-sm">
                {badge}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {!imageSrc && badge && (
            <div className="mb-3">
              <Badge variant="primary" size="sm">
                {badge}
              </Badge>
            </div>
          )}

          <h3 className="text-xl font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors font-outfit mb-2.5">
            <Link href={href} className="focus:outline-none">
              {title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-4 font-inter">
            {description}
          </p>

          {/* Key Feature Highlights */}
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100 text-xs text-slate-700">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-green-600 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-700 group-hover:text-brand-blue-800 transition-colors"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
