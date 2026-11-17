import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Request Custom Packaging Quote | Kakatiya Printers Hyderabad',
  description:
    'Contact Kakatiya Printers in Uppal, Hyderabad for cylinder-free pouch printing, roll labels, and shrink sleeves. Call +91 93910 14493 or visit our manufacturing plant.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/contact-us',
  },
  openGraph: {
    title: 'Contact Kakatiya Printers | Printing Partner in Hyderabad, India',
    description:
      'Get fast quotes on custom stand-up zipper pouches and roll labels. Direct phone, WhatsApp, and plant visits in Uppal IDA.',
    url: 'https://kakatiyaprinters.com/contact-us',
  },
};

export default function ContactUsPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kakatiya Printers',
    telephone: '+91 93910 14493',
    email: 'info@kakatiyaprinters.com',
    url: 'https://kakatiyaprinters.com/contact-us',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'I.D.A, Uppal, Laxmi Narayan Nagar Colony, Ramanthapur',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500039',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.3984,
      longitude: 78.5583,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:30',
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact Us', href: '/contact-us' },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <Badge variant="warning" className="mb-4">
              Direct Plant Support
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Get in Touch with Our Packaging Specialists
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Have a packaging project, need a custom pouch quote, or want to inspect samples in
              person? Reach out via WhatsApp, phone, email, or visit our manufacturing plant in
              Uppal, Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT METHODS GRID */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:border-brand-blue-300 hover:shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-100 text-brand-blue-700">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-outfit text-lg font-bold text-slate-900">Direct Phone</h3>
              <p className="mt-1 text-sm text-slate-600">Speak directly with our technical team</p>
              <a
                href={`tel:${companyInfo.contact.phoneTel}`}
                className="mt-3 block font-semibold text-brand-blue-700 hover:text-brand-blue-800"
              >
                {companyInfo.contact.phoneFormatted}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 transition hover:border-emerald-300 hover:shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-outfit text-lg font-bold text-slate-900">Instant WhatsApp</h3>
              <p className="mt-1 text-sm text-slate-600">Fastest response for quotes & dielines</p>
              <a
                href={companyInfo.contact.whatsappUrl(
                  'Hello Kakatiya Printers, I need a quotation for custom packaging.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:border-brand-blue-300 hover:shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-100 text-brand-blue-700">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-outfit text-lg font-bold text-slate-900">Email Inquiries</h3>
              <p className="mt-1 text-sm text-slate-600">Send purchase orders & print specs</p>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="mt-3 block font-semibold text-brand-blue-700 hover:text-brand-blue-800 break-all"
              >
                {companyInfo.contact.email}
              </a>
            </div>

            {/* Plant Hours */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:border-brand-blue-300 hover:shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-outfit text-lg font-bold text-slate-900">Working Hours</h3>
              <p className="mt-1 text-sm text-slate-600">Monday - Saturday</p>
              <p className="mt-3 font-semibold text-slate-900">9:30 AM – 7:30 PM IST</p>
              <p className="text-xs text-slate-500">Sunday Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INQUIRY FORM & PLANT DETAILS */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <Badge variant="primary" className="mb-3">
                  Direct Inquiries
                </Badge>
                <h2 className="font-outfit text-2xl font-extrabold text-slate-900 md:text-3xl">
                  Send Your Project Specifications
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill in your packaging requirements below. Our engineering team reviews dielines,
                  barrier substrates, and delivers an exact estimate within 24 hours.
                </p>

                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Location & Visiting Info Column */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-600">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-slate-900">
                      Manufacturing Facility
                    </h3>
                    <p className="text-xs text-slate-500">Hyderabad Production Plant</p>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 text-slate-700">
                  <MapPin className="h-5 w-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    <strong>Kakatiya Printers</strong>
                    <br />
                    {companyInfo.address.street},
                    <br />
                    {companyInfo.address.colony}, {companyInfo.address.locality},
                    <br />
                    {companyInfo.address.city}, {companyInfo.address.state} — {companyInfo.address.pincode}, India.
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Why Visit Our Uppal Plant?
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span>Inspect real physical pouch sample kits & barrier materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span>Review dieline templates with our prepress designers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span>Discuss high-speed automatic applicator roll compatibility</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="https://maps.google.com/maps?q=kakatiya%20printers%20I.D.A%2C%20Uppal%2C%20Laxmi%20Narayan%20Nagar%20Colony%2C%20Ramanthapur%2C%20Hyderabad%2C%20Telangana%20500039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" className="w-full justify-center" leftIcon={<Navigation className="h-4 w-4" />}>
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>

              {/* Sample Kit Box */}
              <div className="rounded-2xl border border-brand-blue-200 bg-brand-blue-900 p-8 text-white shadow-sm">
                <Badge variant="warning" className="mb-2">
                  Complimentary
                </Badge>
                <h3 className="font-outfit text-xl font-bold">Request a Free Physical Sample Kit</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Feel the texture of our soft-touch matte films, high-gloss pouches, and roll
                  stickers before placing your bulk order.
                </p>
                <div className="mt-6">
                  <Link
                    href={companyInfo.contact.whatsappUrl(
                      'Hello Kakatiya Printers, please courier a free physical packaging sample kit to my business address.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="whatsapp"
                      size="sm"
                      className="w-full justify-center"
                      leftIcon={<MessageCircle className="h-4 w-4" />}
                    >
                      Request Free Kit via WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE MAPS EMBED */}
      <section className="bg-slate-100 pb-16">
        <div className="container-custom">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            <div className="bg-white px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-outfit text-lg font-bold text-slate-900">
                  Kakatiya Printers Manufacturing Facility Location
                </h3>
                <p className="text-xs text-slate-500">
                  I.D.A Uppal, Ramanthapur, Hyderabad, Telangana 500039
                </p>
              </div>
              <a
                href="https://maps.google.com/maps?q=kakatiya%20printers%20I.D.A%2C%20Uppal%2C%20Laxmi%20Narayan%20Nagar%20Colony%2C%20Ramanthapur%2C%20Hyderabad%2C%20Telangana%20500039"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brand-blue-700 hover:underline"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
            <div className="relative h-[420px] w-full bg-slate-200">
              <iframe
                title="Kakatiya Printers Factory Location"
                src="https://maps.google.com/maps?q=kakatiya%20printers%20I.D.A%2C%20Uppal%2C%20Laxmi%20Narayan%20Nagar%20Colony%2C%20Ramanthapur%2C%20Hyderabad%2C%20Telangana%20500039&t=m&z=15&output=embed&iwloc=near"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
