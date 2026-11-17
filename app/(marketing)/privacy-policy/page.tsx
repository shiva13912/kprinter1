import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kakatiya Printers',
  description:
    'Privacy Policy for Kakatiya Printers. Learn how we handle customer contact inquiries, artwork files, and quotation details with complete security and confidentiality.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Kakatiya Printers',
    description:
      'Learn how Kakatiya Printers protects customer artwork, commercial specifications, and inquiry data.',
    url: 'https://kakatiyaprinters.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
            ]}
          />
          <div className="mt-8">
            <Badge variant="warning" className="mb-4">
              Legal & Compliance
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold sm:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-slate-300">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">1. Introduction</h2>
              <p className="mt-3">
                Kakatiya Printers (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), located in I.D.A Uppal,
                Hyderabad, is dedicated to safeguarding your privacy and treating your business
                information, technical packaging specifications, and proprietary artwork files with the
                highest standard of confidentiality.
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                When you interact with our website, request a quote, or message us via WhatsApp, we may
                collect:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Personal/Business identity: Name, Company Name, and Designation.</li>
                <li>Contact details: Phone number, WhatsApp number, and Email address.</li>
                <li>
                  Packaging specifications: Pouch dimensions, film structures, quantity estimates, and dielines.
                </li>
                <li>
                  Technical data: Browser information, IP address, and basic usage analytics to enhance website speed.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                3. Confidentiality of Artwork & Dielines
              </h2>
              <p className="mt-3">
                We understand that brand artwork, barcodes, formulation disclosures, and dielines
                represent critical intellectual property. Kakatiya Printers guarantees that customer artwork
                is used strictly for printing plates, digital RIP processing, and manufacturing validation. We
                never disclose, license, or sell client artwork to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                4. Communications & Quotations
              </h2>
              <p className="mt-3">
                We use your phone number and email address exclusively to respond to your inquiries,
                provide formal proforma invoices, share PDF proofs, and update you on shipment tracking
                from our Uppal dispatch hub. We do not participate in unsolicited third-party advertising or
                spam.
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                5. Contact Information
              </h2>
              <p className="mt-3">
                For questions regarding this privacy policy or your stored data, please contact:
              </p>
              <p className="mt-2">
                <strong>Kakatiya Printers</strong>
                <br />
                {companyInfo.address.full}
                <br />
                Email: {companyInfo.contact.email}
                <br />
                Phone: {companyInfo.contact.phoneFormatted}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
