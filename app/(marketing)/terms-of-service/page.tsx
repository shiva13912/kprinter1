import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms of Service | Custom Order & Printing Conditions | Kakatiya Printers',
  description:
    'Commercial terms, artwork approvals, manufacturing tolerances, and delivery conditions for custom packaging orders at Kakatiya Printers.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service & Printing Conditions | Kakatiya Printers',
    description:
      'Manufacturing terms, proof sign-offs, and dispatch policies for Kakatiya Printers orders.',
    url: 'https://kakatiyaprinters.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-slate-900 via-brand-blue-950 to-slate-900 py-16 text-white md:py-20">
        <div className="container-custom max-w-4xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Terms of Service', href: '/terms-of-service' },
            ]}
          />
          <div className="mt-8">
            <Badge variant="warning" className="mb-4">
              Commercial Terms
            </Badge>
            <h1 className="font-outfit text-3xl font-extrabold sm:text-4xl">
              Terms & Custom Printing Conditions
            </h1>
            <p className="mt-4 text-slate-300">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                1. Quotations & Order Confirmation
              </h2>
              <p className="mt-3">
                All verbal, email, or WhatsApp quotations are based on the specific dimensions, layer
                structures, and quantities provided. Orders become binding upon receipt of written
                approval (purchase order, email sign-off, or WhatsApp confirmation) and the required advance
                deposit.
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                2. Digital Proofing & Artwork Approval
              </h2>
              <p className="mt-3">
                Before commencing full production runs, Kakatiya Printers provides a final digital PDF
                proof displaying dielines, bleed margins, orientation, and color separations. It is the
                client’s responsibility to thoroughly review text, spelling, FSSAI numbers, barcodes, and
                regulatory details. Once signed off, Kakatiya Printers is not liable for typographical
                errors that were present on the approved proof.
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                3. Manufacturing Tolerances
              </h2>
              <p className="mt-3">
                In custom flexible packaging converting, industry-standard tolerances apply:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>
                  <strong>Quantity Over/Under Run:</strong> ±10% depending on run length due to machine
                  web setup and slitting startup waste.
                </li>
                <li>
                  <strong>Dimensional Tolerance:</strong> ±1.5 mm to ±2.0 mm for pouch width, height, and
                  gusset alignment.
                </li>
                <li>
                  <strong>Color Matching:</strong> While digital flexo achieves delta-E &lt; 2 color
                  reproduction, slight shade variations may occur between transparent films, metallic
                  foils, and kraft papers.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                4. Turnaround & Dispatch
              </h2>
              <p className="mt-3">
                Standard lead times are 7 to 10 working days from the date of final artwork approval and
                advance receipt. While we maintain a 98%+ on-time dispatch track record, Kakatiya Printers
                is not responsible for freight transit delays caused by third-party logistics partners,
                severe weather, or transport strikes.
              </p>
            </div>

            <div>
              <h2 className="font-outfit text-2xl font-bold text-slate-900">
                5. Factory Jurisdiction
              </h2>
              <p className="mt-3">
                Any legal claims or disputes relating to manufacturing contracts shall be governed by the
                laws of the State of Telangana, with exclusive jurisdiction in the courts of Hyderabad,
                India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
