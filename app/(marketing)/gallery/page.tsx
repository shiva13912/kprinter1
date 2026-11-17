import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GalleryView } from '@/components/sections/GalleryView';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';

export const metadata: Metadata = {
  title: 'Packaging Gallery & Factory Samples | Kakatiya Printers Hyderabad',
  description:
    'Visual photo gallery of custom flexible pouches, roll labels, shrink sleeves, and factory machinery at Kakatiya Printers in Uppal, Hyderabad. Inspect real print finishes and barrier structures.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/gallery',
  },
  openGraph: {
    title: 'Packaging Gallery & Factory Samples | Kakatiya Printers',
    description:
      'High-resolution photo gallery of real custom pouches, roll form labels, and plant infrastructure in Uppal, Hyderabad.',
    url: 'https://kakatiyaprinters.com/gallery',
    images: [{ url: '/images/products/Artboard-1.webp', width: 1200, height: 630 }],
  },
};

export default function GalleryPage() {
  return (
    <div>
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Gallery', href: '/gallery' },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <Badge variant="warning" className="mb-4">
              High-Resolution Visual Catalog
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Packaging Samples & Factory Operations Gallery
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Inspect our high-resolution manufacturing runs, machine floors, surface finishes, and
              custom pouch constructions. Click on any sample to view details or request an
              identical quote.
            </p>

            {/* Quick Highlights Strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl bg-white/10 p-3 border border-white/10 backdrop-blur-sm">
                <div className="font-outfit text-xl font-bold text-white">20+ Samples</div>
                <div className="text-[11px] text-slate-300">Pouches, Labels & Sleeves</div>
              </div>
              <div className="rounded-xl bg-white/10 p-3 border border-white/10 backdrop-blur-sm">
                <div className="font-outfit text-xl font-bold text-amber-400">₹0 Plates</div>
                <div className="text-[11px] text-slate-300">Zero Cylinder Charges</div>
              </div>
              <div className="rounded-xl bg-white/10 p-3 border border-white/10 backdrop-blur-sm">
                <div className="font-outfit text-xl font-bold text-emerald-400">500 Pcs</div>
                <div className="text-[11px] text-slate-300">Low Starting MOQ</div>
              </div>
              <div className="rounded-xl bg-white/10 p-3 border border-white/10 backdrop-blur-sm">
                <div className="font-outfit text-xl font-bold text-brand-blue-300">7-10 Days</div>
                <div className="text-[11px] text-slate-300">Dispatch from Uppal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY INTERACTIVE SECTION */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            badge="Visual Portfolio"
            title="Real Production Runs, Zero Cylinder Fees"
            subtitle="Explore high-definition photographs of stand-up zipper pouches, automatic roll labels, shrink sleeves, and plant machinery."
            centered
          />

          <div className="mt-12">
            <GalleryView />
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <BottomCtaBanner />
    </div>
  );
}
