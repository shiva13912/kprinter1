import React from 'react';
import Image from 'next/image';
import { MessageCircle, ZoomIn } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export interface ProductCardProps {
  title: string;
  category: string;
  imageSrc: string;
  finish?: string;
  dimensions?: string;
  onImageClick?: () => void;
}

export function ProductCard({
  title,
  category,
  imageSrc,
  finish,
  dimensions,
  onImageClick,
}: ProductCardProps) {
  const whatsappInquiryUrl = `https://wa.me/919391014493?text=${encodeURIComponent(
    `Hello Kakatiya Printers, I am interested in custom packaging similar to: ${title} (${category}). Please share details.`
  )}`;

  return (
    <Card hoverEffect borderVariant="subtle" className="flex flex-col h-full overflow-hidden p-0 group">
      {/* Media Viewport */}
      <div className="relative aspect-square w-full bg-slate-50 flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute top-3 left-3">
          <Badge variant="slate" size="sm" className="bg-white/90 backdrop-blur-sm shadow-xs">
            {category}
          </Badge>
        </div>

        {onImageClick && (
          <button
            onClick={onImageClick}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/90 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
            aria-label={`Zoom in on ${title}`}
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Details Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold text-brand-navy-900 font-outfit mb-1.5 line-clamp-1">
            {title}
          </h4>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mb-4">
            {finish && (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-700" />
                {finish}
              </span>
            )}
            {dimensions && (
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                {dimensions}
              </span>
            )}
          </div>
        </div>

        {/* Quick Quote Action */}
        <div className="pt-3 border-t border-slate-100">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-accent-whatsapp" />
            <span>Get Quote on WhatsApp</span>
          </a>
        </div>
      </div>
    </Card>
  );
}
