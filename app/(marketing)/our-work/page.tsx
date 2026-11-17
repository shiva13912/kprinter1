import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';

export const metadata: Metadata = {
  title: 'Our Packaging Work & Portfolio | Custom Pouches, Labels & Sleeves',
  description:
    'Explore Kakatiya Printers packaging portfolio: stand-up zipper pouches, roll form labels, shrink sleeves, and laminated packaging films manufactured for food, FMCG, and agricultural brands.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/our-work',
  },
  openGraph: {
    title: 'Our Work | Flexible Packaging Showcase by Kakatiya Printers',
    description:
      'Real production samples of stand-up pouches, roll labels, and shrink sleeves printed with zero cylinder costs in Hyderabad.',
    url: 'https://kakatiyaprinters.com/our-work',
    images: [{ url: '/images/products/Artboard-1.webp', width: 1200, height: 630 }],
  },
};

export default function OurWorkPage() {
  return (
    <div>
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Our Work', href: '/our-work' },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <Badge variant="warning" className="mb-4">
              Real Client Showcase
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Our Packaging Work & Client Portfolio
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Explore real packaging runs manufactured at our Hyderabad plant. From zero-cylinder
              stand-up zipper pouches to high-speed roll labels and 360-degree shrink sleeves,
              witness our print precision and material craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTERABLE SHOWCASE */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            badge="Browse by Category"
            title="Engineered for Shelf Impact & Barrier Integrity"
            subtitle="Click on any category to filter our custom pouch styles, roll labels, shrink sleeves, and continuous films."
            centered
          />

          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <BottomCtaBanner />
    </div>
  );
}
