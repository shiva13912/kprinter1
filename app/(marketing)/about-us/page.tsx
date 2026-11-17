import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Factory,
  ShieldCheck,
  Zap,
  Leaf,
  Target,
  Compass,
  CheckCircle2,
  Phone,
  MessageCircle,
  Building2,
  Clock,
  Award,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';

export const metadata: Metadata = {
  title: 'About Us | 25+ Years of Flexible Packaging Excellence in Hyderabad',
  description:
    'Discover Kakatiya Printers, established in 1998 in Uppal, Hyderabad. Over 25 years of manufacturing excellence in cylinder-free pouch printing, roll form labels, and shrink sleeves.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/about-us',
  },
  openGraph: {
    title: 'About Kakatiya Printers | Professional Printing Partner India',
    description:
      'Pioneering cylinder-free digital flexible packaging, food-grade pouches, and custom labels from our Hyderabad plant since 1998.',
    url: 'https://kakatiyaprinters.com/about-us',
    images: [{ url: '/images/facility/building.webp', width: 1200, height: 630 }],
  },
};

export default function AboutUsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kakatiya Printers',
    foundingDate: '1998',
    url: 'https://kakatiyaprinters.com',
    logo: 'https://kakatiyaprinters.com/images/logos/Kakatiya-Logo-RGB.png',
    description:
      'Established in 1998 in Hyderabad. Specialized in cylinder-free digital flexible packaging, food-grade pouches, and custom labels.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'I.D.A, Uppal, Laxmi Narayan Nagar Colony, Ramanthapur',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500039',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 93910 14493',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Telugu', 'Hindi'],
    },
  };

  const stats = [
    { value: '25+', label: 'Years of Experience', sub: 'Established 1998 in Hyderabad' },
    { value: '500+', label: 'Brands Packed', sub: 'Across FMCG, Food & Agri' },
    { value: '₹0', label: 'Cylinder / Plate Cost', sub: 'Direct digital prepress' },
    { value: '7-10', label: 'Days Turnaround', sub: 'Fast dispatch from Uppal' },
  ];

  const pillars = [
    {
      icon: Zap,
      title: 'Zero Cylinder Burden',
      description:
        'We eliminated the traditional ₹50,000 to ₹1,00,000 setup barrier. Brands can launch and test multi-SKU product lines without upfront tooling debt.',
    },
    {
      icon: ShieldCheck,
      title: 'FSSAI Certified Food-Grade',
      description:
        'All our flexible packaging materials, barrier foils, and printing inks strictly comply with Indian and international food-contact safety standards.',
    },
    {
      icon: Factory,
      title: 'Integrated Uppal Facility',
      description:
        'Our fully equipped plant in I.D.A. Uppal, Hyderabad houses high-precision presses, solventless laminators, and automated pouch-making machinery.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Inks & Low Waste',
      description:
        'Advanced prepress digital flexo reduces startup film wastage by over 70% and utilizes non-toxic, low-VOC printing chemistry.',
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about-us' },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <Badge variant="warning" className="mb-4">
              Established 1998 • Uppal, Hyderabad
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              25+ Years of Trusted Flexible Packaging & Printing Excellence
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Kakatiya Printers is a premier flexible packaging manufacturer based in Hyderabad,
              delivering end-to-end design, digital cylinder-free pouch printing, roll form labels,
              and shrink sleeves for brands across India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="border-l-4 border-brand-blue-600 pl-4">
                <div className="font-outfit text-3xl font-extrabold text-brand-blue-900 md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-900 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & FOUNDATION */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                badge="Our Heritage"
                title="From Traditional Craftsmanship to Modern Digital Innovation"
                subtitle="Founded in 1998, Kakatiya Printers has evolved from a commercial press in Hyderabad into a leader in cylinder-free flexible packaging."
              />
              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  From the very beginning, our goal has been simple — to redefine how businesses view
                  packaging. We believe packaging is not just a wrapper; it is the physical reflection
                  of a brand’s personality, safety commitment, and shelf authority.
                </p>
                <p>
                  Traditionally, entering retail markets with custom printed pouches required massive
                  capital outlays for rotogravure copper cylinders and minimum order runs of 50,000+
                  units. We recognized that startups, regional food brands, and agile FMCG innovators
                  needed a better way.
                </p>
                <p>
                  By investing in cutting-edge cylinder-free digital printing technology, we democratized
                  world-class packaging. Today, our clients can print 500 pouches or 50,000 pouches with
                  zero cylinder costs, photorealistic registration, and rapid 7 to 10 day delivery.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={companyInfo.contact.whatsappUrl(
                    'Hello Kakatiya Printers, I would like to schedule a visit to your Uppal plant.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" leftIcon={<MessageCircle className="h-4 w-4" />}>
                    Chat on WhatsApp
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button variant="outline">Contact Our Plant</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[380px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[460px]">
                <Image
                  src="/images/facility/building.webp"
                  alt="Kakatiya Printers Factory Building in Uppal, Hyderabad"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-5 shadow-xl border border-slate-100 hidden sm:block max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Uppal I.D.A. Plant</h4>
                    <p className="text-xs text-slate-600">
                      Laxmi Narayan Nagar, Ramanthapur, Hyderabad - 500039
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="bg-slate-100 py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="primary" className="mb-3">
              Guiding Principles
            </Badge>
            <h2 className="font-outfit text-3xl font-extrabold text-slate-900">
              Our Mission & Long-Term Vision
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-t-4 border-t-brand-blue-600 p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-outfit text-2xl font-bold text-slate-900">OUR MISSION</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                To empower consumer product businesses of every scale with reliable, cost-effective,
                and visually striking packaging solutions. We strive to eliminate the financial
                barriers of traditional printing through technology, transparency, and personal
                customer partnership.
              </p>
            </Card>

            <Card className="border-t-4 border-t-amber-500 p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Compass className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-outfit text-2xl font-bold text-slate-900">OUR VISION</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                To be India’s most trusted and agile digital flexible packaging partner. We envision a
                future where any brand, from local artisanal startups to national conglomerates, can
                bring their custom packaging ideas to life with zero waste, zero cylinder costs, and
                uncompromising print definition.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING INFRASTRUCTURE & MACHINERY */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            badge="Factory Infrastructure"
            title="State-of-the-Art Printing & Finishing Machinery"
            subtitle="Engineered for micron-precision color registration, airtight heat seals, and rapid production cycles."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm transition hover:shadow-md">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/facility/printing-press.webp"
                  alt="High Speed Printing Press at Kakatiya Printers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-xl font-bold text-slate-900">
                  Digital Flexographic Presses
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  High-speed multi-color printing stations equipped with computerized optical
                  registration for photorealistic CMYK reproduction without metal cylinders.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm transition hover:shadow-md">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/facility/factory-floor.webp"
                  alt="Pouch Fabrication & Slitting Floor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-xl font-bold text-slate-900">
                  Automated Pouch Fabrication
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Multi-format pouch forming lines capable of inserting airtight press-to-close
                  zippers, tear notches, degassing valves, and flat bottom gussets.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm transition hover:shadow-md">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/products/Artboard-8.webp"
                  alt="Solventless Multi-Layer Laminators"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-outfit text-xl font-bold text-slate-900">
                  Solventless Lamination
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Eco-friendly lamination ensures multi-layer barrier films bond securely with zero
                  volatile organic compounds, zero chemical odor, and maximum shelf life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY WE ARE DIFFERENT PILLARS */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
        <div className="container-custom">
          <SectionHeading
            badge="The Kakatiya Advantage"
            title="Why Leading Brands Trust Us"
            subtitle="Built on 25 years of engineering precision, customer honesty, and responsive service."
            centered
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm hover:border-brand-blue-300 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-outfit text-lg font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <BottomCtaBanner />
    </div>
  );
}
