import React from 'react';
import Image from 'next/image';
import { Package, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { Button } from '@/components/ui/Button';

export function FreeSampleKitSection() {
  const sampleRequestWaUrl = `https://wa.me/919391014493?text=${encodeURIComponent(
    'Hello Kakatiya Printers, I would like to request a complimentary packaging sample kit (pouches with matte, glossy, and metallic finishes) to evaluate your quality.'
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-blue-50 via-white to-blue-50/50 border-y border-brand-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-700 text-white shadow-xs">
              <Package className="w-3.5 h-3.5" />
              <span>Complimentary Quality Evaluation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy-900 font-outfit leading-tight">
              Test Our Print Quality Before You Place a Bulk Order
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-inter">
              We offer complimentary sample kits so you can physically evaluate our print clarity, substrate thickness, barrier integrity, and specialty finishes. Inspect our digital printing pouches in soft-touch matte, high-gloss, and metallic laminations before confirming your order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real pouch samples (250g, 500g, 1kg)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Soft-touch matte, gloss & foil swatches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Roll label adhesive test strips</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free dispatch across India</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href={sampleRequestWaUrl}
                variant="whatsapp"
                size="md"
                leftIcon={<MessageCircle className="w-4 h-4" />}
              >
                Request Free Sample Kit on WhatsApp
              </Button>
              <Button href="#quote-form" variant="outline" size="md">
                Fill Sample Request Form
              </Button>
            </div>
          </div>

          {/* Right Image Feature (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 shadow-card bg-white p-4">
              <Image
                src="/images/products/Artboard-8.webp"
                alt="Kakatiya Printers Packaging Sample Kit Lineup"
                fill
                className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 400px"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-slate-200/80 text-center shadow-xs">
                <span className="text-xs font-bold text-brand-navy-900 block font-outfit">
                  Multi-SKU Finish & Pouch Sample Kit
                </span>
                <span className="text-[11px] text-slate-500">Shipped directly from our Uppal, Hyderabad plant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
