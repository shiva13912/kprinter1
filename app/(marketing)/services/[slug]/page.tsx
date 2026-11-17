import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Package,
  Layers,
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import { servicesData, ServiceItem } from '@/data/services';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://kakatiyaprinters.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Kakatiya Printers Hyderabad`,
      description: service.metaDescription,
      url: `https://kakatiyaprinters.com/services/${service.slug}`,
      images: [{ url: service.heroImage, width: 1200, height: 630 }],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // JSON-LD schema for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // JSON-LD schema for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: 'Flexible Packaging & Commercial Printing',
    description: service.shortDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Kakatiya Printers',
      telephone: '+91 93910 14493',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'I.D.A, Uppal, Laxmi Narayan Nagar Colony, Ramanthapur',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500039',
        addressCountry: 'IN',
      },
      url: 'https://kakatiyaprinters.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.features.map((feat) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feat.title,
          description: feat.description,
        },
      })),
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Badge variant="warning" className="mb-4">
                {service.heroBadge}
              </Badge>
              <h1 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Key Specs Bar */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                  <Package className="h-4 w-4 text-brand-blue-400" />
                  <span>
                    <strong>MOQ:</strong> {service.moq}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>
                    <strong>Turnaround:</strong> {service.turnaround}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={companyInfo.contact.whatsappUrl(
                    `Hello Kakatiya Printers, I need a quotation for ${service.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="whatsapp"
                    size="lg"
                    leftIcon={<MessageCircle className="h-5 w-5" />}
                  >
                    Get WhatsApp Quote
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    Request Sample Kit
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-2xl md:h-[400px]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & FEATURES */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="space-y-6 lg:col-span-7">
              <SectionHeading
                badge="Engineering & Capabilities"
                title={`Why Choose Our ${service.title}?`}
                subtitle="High-definition digital printing, certified barrier protection, and flexible order sizes."
              />

              <div className="space-y-4 text-slate-700 leading-relaxed">
                {service.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Features Cards */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-brand-blue-300 hover:bg-white"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <h4 className="font-outfit text-base font-bold text-slate-900">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Technical Specs Table */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="bg-brand-blue-900 px-6 py-4 text-white">
                  <h3 className="font-outfit text-lg font-bold">Technical Specifications</h3>
                  <p className="text-xs text-slate-300">Certified Uppal Plant Standards</p>
                </div>
                <div className="divide-y divide-slate-100 p-6 text-sm">
                  {service.specifications.map((spec, idx) => (
                    <div key={idx} className="py-3 first:pt-0 last:pb-0">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {spec.label}
                      </div>
                      <div className="mt-1 font-medium text-slate-800">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MATERIALS & FINISHES */}
      <section className="bg-slate-100 py-16 md:py-20 border-y border-slate-200">
        <div className="container-custom">
          <SectionHeading
            badge="Substrates & Aesthetics"
            title="Material Structures & Surface Finishes"
            subtitle="Engineered multi-layer laminate films providing maximum aroma barrier, puncture strength, and tactile luxury."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Materials List */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-slate-900">
                  Available Substrate Materials
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {service.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Finishes List */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-slate-900">
                  Surface Finishes & Visual Effects
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {service.finishes.map((fin, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    <span>{fin}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            badge="Target Sectors"
            title="Industries We Cater To"
            subtitle={`How consumer brands leverage our ${service.title.toLowerCase()} for market dominance.`}
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.industries.map((ind, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-blue-300 transition"
              >
                <h4 className="font-outfit text-lg font-bold text-slate-900">{ind.name}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SAMPLE SHOWCASE GALLERY */}
      {service.sampleImages && service.sampleImages.length > 0 && (
        <section className="bg-slate-50 py-16 border-t border-slate-200">
          <div className="container-custom">
            <SectionHeading
              badge="Product Samples"
              title="Real Production Runs"
              subtitle="Inspect our print definition, foil registration, and seam finishes."
              centered
            />

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {service.sampleImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-60 w-full overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <Image
                    src={img}
                    alt={`${service.title} sample ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. FAQS ACCORDION */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle={`Everything you need to know about ordering ${service.title.toLowerCase()}.`}
            centered
          />

          <div className="mt-12">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <BottomCtaBanner />
    </div>
  );
}
