import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Zap,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Package,
  MessageCircle,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import { servicesData } from '@/data/services';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';

export const metadata: Metadata = {
  title: 'Custom Flexible Packaging & Printing Services | Kakatiya Printers',
  description:
    'Comprehensive flexible packaging services in Hyderabad: Pouch printing without cylinder, roll form labels, shrink sleeves, continuous films, and flat bottom pouches. Low MOQs and zero plate costs.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/services',
  },
  openGraph: {
    title: 'Custom Flexible Packaging Services | Kakatiya Printers Hyderabad',
    description:
      'Cylinder-free digital pouch printing, automatic roll labels, shrink sleeves, and FFS film rolls manufactured in Uppal, Hyderabad.',
    url: 'https://kakatiyaprinters.com/services',
    images: [{ url: '/images/hero/pouch-printing-hyderabad-hero.webp', width: 1200, height: 630 }],
  },
};

export default function ServicesHubPage() {
  const comparisonRows = [
    {
      feature: 'Upfront Tooling / Cylinder Cost',
      traditional: '₹8,000 – ₹15,000 per color (₹60,000+ total)',
      kakatiya: '₹0 (Zero plate or cylinder charges)',
      winner: true,
    },
    {
      feature: 'Minimum Order Quantity (MOQ)',
      traditional: '30,000 – 50,000 pouches minimum',
      kakatiya: 'Low MOQ from 500 – 1,000 pouches',
      winner: true,
    },
    {
      feature: 'Turnaround & Dispatch Time',
      traditional: '30 – 45 working days for cylinder engraving',
      kakatiya: '7 – 10 working days from artwork approval',
      winner: true,
    },
    {
      feature: 'Multi-SKU Variant Agility',
      traditional: 'Prohibitive (Requires new cylinders per variant)',
      kakatiya: 'Effortless gang-runs in one print order',
      winner: true,
    },
    {
      feature: 'Artwork Changes & Revisions',
      traditional: 'Requires expensive re-engraving of cylinders',
      kakatiya: 'Update digital artwork file at zero cost',
      winner: true,
    },
    {
      feature: 'Print Definition & Micro-Text',
      traditional: 'Prone to registration shifts on fine text',
      kakatiya: '2400 DPI photographic digital flexo registration',
      winner: true,
    },
  ];

  return (
    <div>
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <Badge variant="warning" className="mb-4">
              Integrated Packaging Solutions
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Advanced Flexible Packaging & Commercial Printing Services
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Eliminate heavy cylinder investments and long manufacturing lead times. We engineer
              custom stand-up pouches, roll labels, shrink sleeves, and barrier films for FMCG,
              food, cosmetics, and agricultural brands across India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES CATALOG GRID */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            badge="Core Capabilities"
            title="Our Complete Flexible Packaging Portfolio"
            subtitle="Explore our specialized manufacturing lines designed for high shelf visibility, barrier protection, and cost efficiency."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition duration-300 hover:shadow-xl hover:border-brand-blue-300"
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary" className="bg-brand-blue-900/90 text-white backdrop-blur-sm">
                      {service.heroBadge}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-outfit text-xl font-bold text-slate-900 group-hover:text-brand-blue-700 transition">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                    <div>
                      <strong className="text-slate-800">MOQ:</strong> {service.moq}
                    </div>
                    <div>
                      <strong className="text-slate-800">Lead Time:</strong> {service.turnaround}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full justify-center">
                        Explore Specs &rarr;
                      </Button>
                    </Link>
                    <Link
                      href={companyInfo.contact.whatsappUrl(
                        `Hello Kakatiya Printers, I need a quotation for: ${service.title}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="whatsapp"
                        size="sm"
                        leftIcon={<MessageCircle className="h-4 w-4" />}
                      >
                        Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON MATRIX: TRADITIONAL VS KAKATIYA PRINTERS */}
      <section className="bg-slate-100 py-16 md:py-24 border-y border-slate-200">
        <div className="container-custom">
          <SectionHeading
            badge="The Technology Shift"
            title="Traditional Rotogravure vs. Cylinder-Free Digital Flexo"
            subtitle="Compare the costs, timelines, and flexibility between conventional printing and Kakatiya Printers' modern process."
            centered
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-900">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Comparison Parameter
                  </th>
                  <th scope="col" className="px-6 py-4 text-slate-500">
                    Traditional Rotogravure
                  </th>
                  <th scope="col" className="px-6 py-4 bg-brand-blue-50 text-brand-blue-900">
                    Kakatiya Printers (Cylinder-Free)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.feature}</td>
                    <td className="px-6 py-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <X className="h-4 w-4 text-rose-500 flex-shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 bg-brand-blue-50/40 font-medium text-brand-blue-950">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span>{row.kakatiya}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <BottomCtaBanner />
    </div>
  );
}
