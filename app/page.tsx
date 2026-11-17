import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Zap,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  MessageCircle,
  Factory,
  Check,
  X,
  FileCheck2,
  Package,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { ProductCard } from '@/components/sections/ProductCard';
import { BlogCard } from '@/components/sections/BlogCard';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { FreeSampleKitSection } from '@/components/sections/FreeSampleKitSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { BottomCtaBanner } from '@/components/sections/BottomCtaBanner';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Pouch Printing Without Cylinder in Hyderabad | Kakatiya Printers',
  description:
    'Leading printing partner in India for pouch printing without cylinder, custom stand-up zipper pouches, and roll form labels. Fast 7-10 day turnaround, zero plate costs, and low MOQs from our Uppal, Hyderabad plant.',
  alternates: {
    canonical: 'https://kakatiyaprinters.com/',
  },
  openGraph: {
    title: 'Pouch Printing Without Cylinder in Hyderabad | Kakatiya Printers',
    description:
      'Zero cylinder charges, low MOQs, and fast delivery for custom stand-up zipper pouches and roll labels in Hyderabad.',
    url: 'https://kakatiyaprinters.com/',
    siteName: 'Kakatiya Printers',
    images: [
      {
        url: '/images/hero/pouch-printing-hyderabad-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kakatiya Printers Cylinder-Free Flexible Packaging',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  const verifiedFaqs = [
    {
      question: 'What does "pouch printing without cylinder" mean and how does it save money?',
      answer:
        'Traditional rotogravure printing requires heavy copper or metal cylinders engraved for each individual color (costing ₹8,000 to ₹15,000 per cylinder, or ₹50,000–₹1,00,000+ upfront). Cylinder-free digital printing eliminates these mechanical plates completely. You print directly from high-resolution digital artwork onto laminated barrier films, saving 100% of cylinder setup charges and eliminating plate revision fees when packaging details change.',
    },
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer:
        'Because we eliminate cylinder engraving setup, our minimum order quantities start as low as 500 to 1,000 pieces per design variant. This allows startups, D2C brands, and established companies to test market response, launch multiple product flavors (multi-SKU), and maintain lean inventory without tying up capital.',
    },
    {
      question: 'Are Kakatiya Printers pouches certified food-grade and safe for direct contact?',
      answer:
        'Yes. All our pouches are manufactured using certified food-grade multi-layer barrier substrates (such as PET, MPET, Poly, and Kraft Paper) and non-toxic food-safe inks that comply with FSSAI regulations. Our high-barrier films provide robust protection against moisture, oxygen, light, and aroma loss to ensure maximum product freshness.',
    },
    {
      question: 'What types of pouches and finishes can I choose from?',
      answer:
        'We manufacture Stand-Up Pouches with Resealable Zippers, Three-Side Seal Pouches, Center Seal / Pillow Bags, Side Gusset Bags, and Flat Bottom Box Pouches. Available surface finishes include Soft-Touch Matte, High-Gloss, Metallic Foil, Transparent Product Windows, and Kraft Paper with aroma-retention valves.',
    },
    {
      question: 'What is the production and dispatch timeline from your Hyderabad plant?',
      answer:
        'Once your digital artwork proof is approved, our standard manufacturing turnaround is 7 to 10 business days for printing, lamination, curing, slitting, and pouch conversion. All orders dispatch directly from our Uppal Industrial Development Area (IDA) facility in Hyderabad with tracked delivery across India.',
    },
    {
      question: 'Can I inspect sample pouches before confirming a bulk order?',
      answer:
        'Yes! We offer complimentary physical sample kits containing pouches in various finishes (matte, glossy, metallic) and sizes so you can evaluate print sharpness, material feel, zipper seal strength, and barrier thickness prior to bulk production.',
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Kakatiya Printers',
    legalName: 'Kakatiya Printers',
    url: 'https://kakatiyaprinters.com',
    logo: 'https://kakatiyaprinters.com/images/logos/Kakatiya-Logo-RGB.png',
    image: 'https://kakatiyaprinters.com/images/facility/building.webp',
    description:
      'Hyderabad’s leading cylinder-free flexible packaging and custom pouch printing partner. Zero plate charges, low MOQs, and 7–10 day delivery.',
    telephone: '+91 93910 14493',
    email: 'info@kakatiyaprinters.com',
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
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, UPI, Credit Card',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: verifiedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kakatiya Printers',
    url: 'https://kakatiyaprinters.com',
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-inter selection:bg-brand-blue-100 selection:text-brand-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 1. Global Navigation Header */}
      <Header />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section: Precision Industrial Packaging */}
        <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100/70 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Core Value Proposition (7 cols) */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200/80 mb-6">
                  <Zap className="w-3.5 h-3.5 text-brand-blue-700" />
                  <span>Zero Plate Cost • Low MOQs from 500 Pcs • 7–10 Days Dispatch</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy-900 font-outfit leading-[1.12] mb-6">
                  Pouch Printing Without Cylinder in Hyderabad
                </h1>

                <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl font-inter">
                  Print your designs directly on laminated films without expensive traditional cylinders. Save ₹50,000+ in setup fees, eliminate plate delays, and launch high-definition stand-up zipper pouches and roll labels in just 7–10 days.
                </p>

                {/* Primary Dual Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                  <Button
                    href={companyInfo.whatsappUrl}
                    variant="whatsapp"
                    size="lg"
                    leftIcon={<MessageCircle className="w-5 h-5" />}
                  >
                    Get Instant Quote on WhatsApp
                  </Button>

                  <Button
                    href="#sample-kit"
                    variant="outline"
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Request Free Sample Kit
                  </Button>
                </div>

                {/* Trust Verification Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-700 shrink-0" />
                    <span>₹0 Cylinder Charges</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-700 shrink-0" />
                    <span>Low MOQs from 500 Pcs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% FSSAI Food Grade</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Hero Pouch Showcase Card */}
                  <div className="relative aspect-square rounded-2xl bg-white border border-slate-200/80 shadow-card p-6 flex flex-col justify-between overflow-hidden group">
                    <div className="flex items-center justify-between z-10">
                      <Badge variant="primary" size="md">
                        Cylinder-Free Digital Flexo
                      </Badge>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        7–10 Days Dispatch
                      </span>
                    </div>

                    <div className="relative w-full h-64 my-auto">
                      <Image
                        src="/images/products/Artboard-1.webp"
                        alt="Custom Stand-Up Zipper Pouch printed without cylinder"
                        fill
                        priority
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300 ease-out"
                        sizes="(max-width: 640px) 100vw, 400px"
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-100 z-10 flex items-center justify-between text-xs text-slate-600">
                      <div>
                        <span className="font-bold text-slate-900 block font-outfit text-sm">
                          Stand-Up Zipper Pouch
                        </span>
                        <span>Soft-Touch Matte • Multi-Layer Food Barrier</span>
                      </div>
                      <span className="font-bold text-brand-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                        ₹0 Plates
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technology Comparison: Traditional Gravure vs. Kakatiya Cylinder-Free */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Technological Innovation"
              title="How Cylinder-Free Printing Saves Your Business Capital"
              subtitle="See how our advanced digital flexible printing technology compares to traditional rotogravure cylinder printing."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Old Traditional Gravure Printing */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-outfit">
                      Traditional Rotogravure Printing
                    </h3>
                    <span className="text-xs text-slate-500">Rigid & Expensive Legacy Setup</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 pt-3 border-t border-slate-200">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Heavy Cylinder Costs:</strong> ₹8,000–₹15,000 per color (₹50k–₹1L per design variant).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>High Minimum Order:</strong> Requires 30,000 to 50,000+ pouches per SKU.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Slow Turnaround:</strong> Cylinder engraving takes 20 to 35+ days before printing begins.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Costly Artwork Changes:</strong> Any FSSAI label, barcode, or ingredient change requires brand-new cylinders.</span>
                  </li>
                </ul>
              </div>

              {/* Kakatiya Cylinder-Free Printing */}
              <div className="bg-brand-blue-50/50 rounded-2xl border-2 border-brand-blue-700/80 p-6 sm:p-8 shadow-sm relative">
                <div className="absolute top-4 right-4">
                  <Badge variant="primary" size="sm">
                    Recommended
                  </Badge>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-700 text-white flex items-center justify-center font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy-900 font-outfit">
                      Kakatiya Cylinder-Free Digital Printing
                    </h3>
                    <span className="text-xs text-brand-blue-700 font-semibold">Agile, Fast & Cost-Effective</span>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-800 pt-3 border-t border-brand-blue-200">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>₹0 Cylinder Charges:</strong> Print directly on laminated films with zero plate engraving costs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Low MOQs from 500 Pcs:</strong> Ideal for launching new flavors, seasonal batches, and testing markets.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Rapid 7–10 Day Dispatch:</strong> Fast in-house manufacturing at our Uppal, Hyderabad plant.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Flexible Multi-SKU Runs:</strong> Update text, ingredients, or artwork files without financial penalties.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Complete Services & Packaging Capabilities Overview */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Packaging Solutions"
            title="Custom Packaging & Label Printing Capabilities"
            subtitle="From shelf-ready resealable pouches to high-speed automatic dispensing roll labels, we engineer custom packaging tailored to your exact industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Pouch Printing Without Cylinder"
              description="Custom stand-up zipper pouches, three-side seal bags, and center seal pouches. Save setup time, reduce costs, and enjoy flawless color consistency across every batch."
              href="/services/pouch-printing-without-cylinder"
              badge="Core Speciality"
              imageSrc="/images/products/Artboard-1.webp"
              features={[
                'Zero cylinder or plate charges',
                'Low MOQs from 500 to 50,000+ pcs',
                'Airtight resealable zipper closures',
                'Certified food-grade barrier films',
              ]}
              ctaLabel="View Pouch Finishes & Specs"
            />

            <ServiceCard
              title="Roll Form Labels & Stickers"
              description="Durable, machine-friendly roll labels for automatic application lines. Choose from PP, PET, or paper media with customized adhesive strength and premium surface finishes."
              href="/services/roll-form-label-printing"
              badge="High Speed"
              imageSrc="/images/products/Artboard-6.webp"
              features={[
                'Chromo paper, clear PP & metallic foil',
                'Waterproof, oil-proof & scuff-resistant',
                '1-inch & 3-inch core sizes available',
                'Sharp barcodes & QR code readability',
              ]}
              ctaLabel="View Roll Label Options"
            />

            <ServiceCard
              title="Shrink Sleeves & BOPP Labels"
              description="Give your bottles and jars a complete 360° branding wrap. Our digital printed sleeves and BOPP labels offer high clarity, waterproof finishing, and quick production."
              href="/services/shrink-sleeves-printing"
              badge="360° Wrap"
              imageSrc="/images/products/Artboard-7.webp"
              features={[
                'Full-body contour fitting on any container',
                'High shrink ratio PET-G & PVC films',
                'Tamper-evident cap & neck perforations',
                'Vibrant reverse printing protection',
              ]}
              ctaLabel="View Shrink Sleeve Details"
            />

            <ServiceCard
              title="Flexible Film Printing Services"
              description="Continuous printed laminate rolls for automated Form-Fill-Seal (FFS) flow wrap and pouch packing machines. Precision tension-controlled reels."
              href="/services/film-printing-services"
              badge="Automated FFS"
              imageSrc="/images/hero/pouch-banner-wide.webp"
              features={[
                'BOPP, CPP, Polyester & LDPE films',
                'High barrier against oxygen & moisture',
                'Smooth feeding for high-speed machines',
                'Ideal for chips, snacks, pulses & powders',
              ]}
              ctaLabel="View Film Laminate Specs"
            />

            <ServiceCard
              title="Flat Bottom Box Pouches"
              description="Strong, stable, and shelf-ready — our 5-panel flat bottom pouches are perfect for coffee, premium snacks, dry fruits, and pet food with luxury finishes."
              href="/services/flat-bottom-pouches"
              badge="Premium 5-Panel"
              imageSrc="/images/products/Artboard-2.webp"
              features={[
                'Self-standing flat bottom stability',
                'Kraft paper, soft-touch matte & gloss',
                'Degassing valves for freshly roasted coffee',
                'Maximum shelf display impact',
              ]}
              ctaLabel="View Flat Bottom Pouches"
            />

            <ServiceCard
              title="Full-Service Prepress & Sampling"
              description="Our in-house design and prepress team ensures your packaging artwork is calibrated, color-matched, and rendered in 3D digital mockups before printing."
              href="/contact-us"
              badge="In-House Support"
              imageSrc="/images/facility/factory-floor.webp"
              features={[
                'Free digital 3D mockup previews',
                'Color calibration across materials',
                'Direct plant consultations in Uppal',
                'Complimentary physical sample kits',
              ]}
              ctaLabel="Consult Packaging Team"
            />
          </div>
        </section>

        {/* 5. Free Sample Kit Callout Section */}
        <div id="sample-kit">
          <FreeSampleKitSection />
        </div>

        {/* 6. Curated Product Portfolio Showcase */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Packaging Showcase"
              title="Recent Custom Packaging Manufactured at Our Uppal Plant"
              subtitle="Inspect our craftsmanship across various formats, barrier structures, soft-touch matte, high-gloss, metallic foil, and transparent window finishes."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProductCard
                title="Spice & Condiment Zipper Pouch"
                category="Stand-Up Pouches"
                imageSrc="/images/products/Artboard-1.webp"
                finish="Vibrant Glossy"
                dimensions="100g / 250g"
              />
              <ProductCard
                title="Premium Coffee Degassing Valve Pouch"
                category="Flat Bottom Pouches"
                imageSrc="/images/products/Artboard-2.webp"
                finish="Soft-Touch Matte"
                dimensions="250g / 500g"
              />
              <ProductCard
                title="Dry Fruits & Nuts Window Pouch"
                category="Stand-Up Pouches"
                imageSrc="/images/products/Artboard-3.webp"
                finish="Clear Window + Matte"
                dimensions="500g / 1kg"
              />
              <ProductCard
                title="Gourmet Snacks Die-Cut Handle Pouch"
                category="Custom Pouches"
                imageSrc="/images/products/Artboard-4.webp"
                finish="High-Gloss Food Grade"
                dimensions="Custom Size"
              />
              <ProductCard
                title="Herbal Tea Foil Barrier Pack"
                category="Metallic Pouches"
                imageSrc="/images/products/Artboard-5.webp"
                finish="Silver Metallized Foil"
                dimensions="150g / 250g"
              />
              <ProductCard
                title="Automatic Dispensing Bottle Roll Labels"
                category="Roll Form Labels"
                imageSrc="/images/products/Artboard-6.webp"
                finish="Clear Synthetic PP"
                dimensions="Custom Die-Cut"
              />
              <ProductCard
                title="360° Beverage Bottle Shrink Sleeve"
                category="Shrink Sleeves"
                imageSrc="/images/products/Artboard-7.webp"
                finish="Reverse Printed PET-G"
                dimensions="Full Wrap"
              />
              <ProductCard
                title="Heavy-Duty Pet Food Moisture Pouch"
                category="Stand-Up Pouches"
                imageSrc="/images/products/Artboard-10.webp"
                finish="Reinforced Barrier"
                dimensions="1kg / 2kg"
              />
            </div>

            <div className="mt-12 text-center">
              <Button href="/our-work" variant="outline" size="md">
                View Full Packaging Portfolio & Samples →
              </Button>
            </div>
          </div>
        </section>

        {/* 7. Why Choose Kakatiya Printers (8 Pillars) */}
        <WhyChooseSection />

        {/* 8. Verified Client Testimonials ("Our Client's Tale") */}
        <TestimonialsSection />

        {/* 9. Educational Packaging Knowledge & Insights */}
        <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Packaging Knowledge"
              title="Packaging Insights, Technical Guides & Cost Tips"
              subtitle="Learn how to optimize packaging budgets, choose barrier structures, and scale your brand without cylinder capital waste."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BlogCard
                slug="best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder"
                title="Best Printing Company in Hyderabad for Pouch Printing Without Cylinder"
                excerpt="Discover why Hyderabad's fast-growing food, spice, and D2C brands in Uppal, Cherlapally, and Kattedan choose cylinder-free digital packaging."
                imageSrc="/images/blogs/best-printing-company-hyderabad.jpeg"
                readTime="5 min read"
                date="Hyderabad Industry Guide"
                tag="Local Guide"
              />
              <BlogCard
                slug="how-to-reduce-packaging-costs-without-compromising-quality"
                title="How to Reduce Packaging Costs Without Compromising Quality"
                excerpt="Learn practical packaging engineering techniques to cut costs by 30%: eliminating cylinders, right-sizing pouch volume, and multi-SKU gang runs."
                imageSrc="/images/blogs/reduce-packaging-costs.webp"
                readTime="6 min read"
                date="Cost Optimization"
                tag="Cost Strategy"
              />
              <BlogCard
                slug="pouch-printing-without-cylinder-why-it-matters-for-small-businesses"
                title="Pouch Printing Without Cylinder: Why It Matters for Small Businesses"
                excerpt="Why startups should never lock up ₹1 Lakh in rigid rotogravure cylinders when agile digital pouch printing offers low MOQs and rapid turnaround."
                imageSrc="/images/blogs/pouch-printing-small-business.webp"
                readTime="4 min read"
                date="Startup Guide"
                tag="Startup Agility"
              />
            </div>
          </div>
        </section>

        {/* 10. Frequently Asked Questions (FAQ Accordion with FAQPage Schema) */}
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Frequently Asked Questions"
              title="Everything You Need to Know About Cylinder-Free Printing"
              subtitle="Clear answers on cylinder-free technology, minimum order quantities, barrier laminates, and dispatch timelines."
            />

            <FaqAccordion items={verifiedFaqs} />
          </div>
        </section>

        {/* 11. Lead Generation Quote Request Section */}
        <section id="quote-form" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Direct Factory Consultation"
            title="Request a Custom Quote & Packaging Consultation"
            subtitle="Share your packaging requirements below. Our technical team at the Uppal, Hyderabad plant will evaluate your specs and prepare a detailed quote within 2 hours."
          />

          <ContactForm />
        </section>

        {/* 12. Bottom Conversion Callout Banner */}
        <BottomCtaBanner />
      </main>

      {/* 13. Global Master Footer */}
      <Footer />

      {/* 14. Persistent WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
