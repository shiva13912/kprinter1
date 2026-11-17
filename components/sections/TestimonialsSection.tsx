import React from 'react';
import { Star, Quote, ShieldCheck, Building2 } from 'lucide-react';
import { verifiedTestimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-100/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Client Stories"
          title="Our Client's Tale — Trusted Across India"
          subtitle="Real packaging experiences from business founders, plant directors, and supply chain managers who rely on Kakatiya Printers for speed, color consistency, and cylinder-free flexibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {verifiedTestimonials.map((item) => (
            <Card
              key={item.id}
              hoverEffect
              borderVariant="subtle"
              className="flex flex-col justify-between h-full bg-white relative p-6 sm:p-7"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200" />
                </div>

                {/* Highlight Pill */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold text-brand-blue-800 bg-brand-blue-50 px-2.5 py-1 rounded-md border border-brand-blue-100/80">
                    {item.highlight}
                  </span>
                </div>

                {/* Actual Review Quote */}
                <p className="text-sm text-slate-700 leading-relaxed font-inter mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-brand-navy-900 font-outfit">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.designation ? `${item.designation}, ` : ''}
                    <span className="text-brand-blue-700 font-semibold">{item.company}</span>
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Trust Stat Bar */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200/80 p-6 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-600">
          <div>
            <span className="font-extrabold text-2xl text-brand-navy-900 block font-outfit">Since 1998</span>
            <span>25+ Years of Print Excellence</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200" />
          <div>
            <span className="font-extrabold text-2xl text-brand-blue-700 block font-outfit">₹0 Cylinders</span>
            <span>Zero Plate Charges on Digital Pouches</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200" />
          <div>
            <span className="font-extrabold text-2xl text-brand-navy-900 block font-outfit">500 to 50,000+</span>
            <span>Flexible Short & Bulk Run MOQs</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-slate-200" />
          <div>
            <span className="font-extrabold text-2xl text-emerald-600 block font-outfit">7–10 Days</span>
            <span>Fast Turnaround from Uppal Plant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
