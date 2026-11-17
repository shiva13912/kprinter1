import React from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { Button } from '@/components/ui/Button';

export interface BottomCtaBannerProps {
  headline?: string;
  subheadline?: string;
}

export function BottomCtaBanner({
  headline = 'Launch Your Custom Packaging Without Cylinder Costs',
  subheadline = 'Send your design artwork today and receive a 3D digital mockup and custom quote within 2 hours. Low MOQs starting from 500 pieces.',
}: BottomCtaBannerProps) {
  return (
    <section className="bg-gradient-to-br from-brand-navy-950 via-brand-navy-900 to-brand-blue-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative ambient background accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-cyan-500 border border-white/10 mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Instant Turnaround • Hyderabad Facility</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-outfit mb-5 leading-tight text-white">
          {headline}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-inter">
          {subheadline}
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            href={companyInfo.whatsappUrl}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
            leftIcon={<MessageCircle className="w-5 h-5" />}
          >
            Chat with Packaging Engineer
          </Button>

          <Button
            href={`tel:${companyInfo.phoneClean}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:border-white hover:text-white"
            leftIcon={<Phone className="w-4 h-4" />}
          >
            Call: {companyInfo.phoneDisplay}
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero Plate Charges</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>MOQs From 500 Pieces</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>FSSAI Certified Food Grade</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Dispatch in 7–10 Days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
