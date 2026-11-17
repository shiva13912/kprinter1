'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  ZoomIn,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Tag,
  Package,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { companyInfo } from '@/data/company';
import { Button } from '@/components/ui/Button';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'Pouches' | 'Labels' | 'Shrink Sleeves' | 'Films' | 'Facility';
  tags: string[];
  specs: string;
  barrier: string;
}

const galleryImages: GalleryImage[] = [
  // Stand-Up & Zipper Pouches
  {
    id: 'gal-01',
    src: '/images/products/Artboard-1.webp',
    alt: 'Custom Roasted Makhana Stand-Up Pouch',
    title: 'Stand-Up Zipper Pouch - Roasted Makhana',
    category: 'Pouches',
    tags: ['Soft-Touch Matte', 'Airtight Zipper', 'Food Grade'],
    specs: 'PET + MetPET + Poly (Three-Layer Barrier)',
    barrier: 'High Moisture & Oxygen Retention',
  },
  {
    id: 'gal-02',
    src: '/images/products/Artboard-2.webp',
    alt: 'Flat Bottom Coffee Box Pouch with Valve',
    title: 'Artisanal Coffee Flat Bottom Box Pouch',
    category: 'Pouches',
    tags: ['Degassing Valve', 'Kraft Texture', 'Pocket Pull Zipper'],
    specs: 'Kraft Paper + Aluminum Foil + Food Poly',
    barrier: 'One-Way Italian Degassing Aroma Valve',
  },
  {
    id: 'gal-03',
    src: '/images/products/Artboard-3.webp',
    alt: 'Nutraceutical Herbal Powder Pouch',
    title: 'Herbal Botanical Foil Barrier Pouch',
    category: 'Pouches',
    tags: ['High Barrier Foil', '2400 DPI Digital Flexo', 'Tear Notch'],
    specs: 'Polyester + Aluminum Foil + LDPE',
    barrier: '100% Light-Proof & Humidity Shield',
  },
  {
    id: 'gal-04',
    src: '/images/products/Artboard-4.webp',
    alt: 'Export Spice Seasoning Pouch',
    title: 'Export Grade Spice Aroma-Lock Pouch',
    category: 'Pouches',
    tags: ['High Gloss Varnish', 'Aroma Lock', 'Multi-Layer'],
    specs: 'Gloss BOPP + Metallized Polyester + Poly',
    barrier: 'Essential Oil & Aroma Containment',
  },
  {
    id: 'gal-05',
    src: '/images/products/Artboard-9.webp',
    alt: 'Pet Nutrition Flat Bottom Box Pouch',
    title: 'Pet Food Flat Bottom Box Pouch',
    category: 'Pouches',
    tags: ['5-Panel Print', 'Self-Standing', 'Heavy Duty Zipper'],
    specs: 'Matte BOPP + MetPET + Heavy-Duty PE',
    barrier: 'High Puncture & Drop Resistance',
  },
  {
    id: 'gal-06',
    src: '/images/products/Artboard-10.webp',
    alt: 'Gourmet Cranberry Clear Window Pouch',
    title: 'Dry Fruits Transparent Window Pouch',
    category: 'Pouches',
    tags: ['Clear Window', 'Matte Lacquer', 'Rounded Corners'],
    specs: 'Matte PET + Transparent Barrier + Food PE',
    barrier: 'Direct Food Contact FSSAI Approved',
  },
  {
    id: 'gal-07',
    src: '/images/samples/packaging-sample-01.jpeg',
    alt: 'Production Batch Pouches Inspection',
    title: 'Live Production Run: Custom Pouches Batch',
    category: 'Pouches',
    tags: ['Zero Cylinder Run', 'Batch Quality Check', 'Uppal Plant'],
    specs: 'Multi-SKU Gang Run on Digital Flexo',
    barrier: 'Industrial Heat-Sealed Seams',
  },
  {
    id: 'gal-08',
    src: '/images/samples/packaging-sample-05.jpeg',
    alt: 'Multi-SKU Startup Pouches Gang Run',
    title: 'Multi-Flavor Startup Gang-Run Batch',
    category: 'Pouches',
    tags: ['Multi-SKU Agile', 'Low MOQ 500 pcs', 'Zero Tooling'],
    specs: '4 Flavors Printed Simultaneously',
    barrier: 'Airtight Press-To-Close Zipper',
  },
  {
    id: 'gal-09',
    src: '/images/samples/packaging-sample-06.jpeg',
    alt: 'Agricultural Seed Packaging Pouch',
    title: 'Agri-Seed Chemical Barrier Pouch',
    category: 'Pouches',
    tags: ['Puncture Proof', 'Moisture Shield', 'Certified'],
    specs: 'Heavy Gauge Nylon + MetPET + Poly',
    barrier: 'Hermetic Seal for Farm Storage',
  },

  // Roll Form Labels
  {
    id: 'gal-10',
    src: '/images/products/roll-label-mockup-1.webp',
    alt: 'Roll Form Bottle Labels for Beverages',
    title: 'High-Speed Auto Dispenser Roll Labels',
    category: 'Labels',
    tags: ['Chromo Paper', 'Waterproof PP', 'Machine Wound'],
    specs: 'White Synthetic Polypropylene (PP)',
    barrier: 'Deep-Freeze Condensation Proof',
  },
  {
    id: 'gal-11',
    src: '/images/products/roll-label-mockup-2.webp',
    alt: 'Roll Form Label Dispensing Mockup',
    title: 'Precision Die-Cut Cosmetic Bottle Labels',
    category: 'Labels',
    tags: ['Sensor Timing Gap', 'Permanent Acrylic', '3-Inch Core'],
    specs: 'Clear Transparent BOPP with White Underprint',
    barrier: 'Oil, Scratch & Alcohol Resistant',
  },
  {
    id: 'gal-12',
    src: '/images/samples/packaging-sample-02.jpeg',
    alt: 'Roll Labels Quality Check at Kakatiya Printers',
    title: 'Roll Labels Optical Registration QA',
    category: 'Labels',
    tags: ['Registration Check', 'Optical Testing', 'Die-Cut QA'],
    specs: 'Standard 76mm Industrial Heavy-Duty Cores',
    barrier: 'High-Tack Permanent Acrylic Adhesive',
  },

  // Shrink Sleeves
  {
    id: 'gal-13',
    src: '/images/products/Artboard-5.webp',
    alt: 'Fruit Beverage 360 Degree Shrink Sleeve',
    title: 'Cold-Pressed Juice 360° Shrink Sleeve',
    category: 'Shrink Sleeves',
    tags: ['PETG 75% Shrink', 'Tamper Cap Perforation', 'Contoured'],
    specs: 'PET-G Polymer (45 Micron Thickness)',
    barrier: '100% Waterproof Reverse Printed',
  },
  {
    id: 'gal-14',
    src: '/images/products/Artboard-6.webp',
    alt: 'Cosmetic Lotion Bottle Shrink Sleeve',
    title: 'Luxury Skincare Bottle Contour Sleeve',
    category: 'Shrink Sleeves',
    tags: ['Velvet Matte Finish', 'Metallic Accent', 'Seamless'],
    specs: 'PET-G with High-Brilliance Metallic Inks',
    barrier: 'Abrasion & Moisture Impermeable',
  },
  {
    id: 'gal-15',
    src: '/images/samples/packaging-sample-03.jpeg',
    alt: 'Contour Shrink Sleeves Batch Inspection',
    title: 'Heat-Tunnel Tested Shrink Sleeve Batch',
    category: 'Shrink Sleeves',
    tags: ['Tunnel Tested', 'Distortion Corrected', 'Vibrant'],
    specs: 'Grid-Distortion Prepress Compensated',
    barrier: 'Contour Hugging Tamper-Evident Band',
  },

  // Laminated Packaging Films
  {
    id: 'gal-16',
    src: '/images/products/Artboard-7.webp',
    alt: 'Continuous Printed Flow Wrap Film Roll',
    title: 'Automated FFS Flow-Wrap Packaging Film',
    category: 'Films',
    tags: ['Controlled COF Slip', 'Heat Sealable', '120 bpm Speed'],
    specs: 'BOPP / MetBOPP Continuous Film Rolls',
    barrier: 'Solventless Eco-Friendly Lamination',
  },
  {
    id: 'gal-17',
    src: '/images/products/Artboard-8.webp',
    alt: 'Nitrogen Flushed Chips Barrier Film Roll',
    title: 'Nitrogen-Flush Snack Food Barrier Film',
    category: 'Films',
    tags: ['Nitrogen Flush', 'Solventless Lam', 'Zero Odor'],
    specs: 'Polyester + Metallized Barrier + Cast Poly',
    barrier: 'Zero Chemical Odor (FSSAI Compliant)',
  },
  {
    id: 'gal-18',
    src: '/images/samples/packaging-sample-04.jpeg',
    alt: 'Slit Packaging Rolls in Warehouse',
    title: 'Slit & Rewound Packaging Rolls in Warehouse',
    category: 'Films',
    tags: ['Precision Slitting', 'Ready for Dispatch', 'Warehouse QA'],
    specs: 'Custom Millimeter Slit Widths',
    barrier: 'Hermetic Seal Temperature Tolerance',
  },

  // Facility & Machinery
  {
    id: 'gal-19',
    src: '/images/facility/building.webp',
    alt: 'Kakatiya Printers Factory Building Uppal',
    title: 'Uppal I.D.A. Manufacturing Plant',
    category: 'Facility',
    tags: ['Uppal Hyderabad', '25+ Years Legacy', 'Integrated Plant'],
    specs: 'Laxmi Narayan Nagar Colony, Ramanthapur, Hyderabad',
    barrier: 'Full Prepress, Printing & Pouch Conversion',
  },
  {
    id: 'gal-21',
    src: '/images/facility/factory-floor.webp',
    alt: 'Automated Pouch Making and Slitting Machinery',
    title: 'Automated Pouch Sealing & Slitting Lines',
    category: 'Facility',
    tags: ['Zipper Insertion', 'Precision Slitting', 'Cleanroom Standards'],
    specs: 'High-Speed Automated Pouch Fabricators',
    barrier: 'Airtight Seam & Gusset Heat Validation',
  },
];

const categoryTabs = [
  { id: 'All', label: 'All Samples', icon: Sparkles },
  { id: 'Pouches', label: 'Stand-Up Pouches', icon: Package },
  { id: 'Labels', label: 'Roll Labels', icon: Tag },
  { id: 'Shrink Sleeves', label: 'Shrink Sleeves', icon: Layers },
  { id: 'Films', label: 'Packaging Films', icon: Layers },
  { id: 'Facility', label: 'Factory & Machines', icon: Building2 },
] as const;

export function GalleryView() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: galleryImages.length };
    galleryImages.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered images based directly on active category tab
  const filteredImages = useMemo(() => {
    if (activeTab === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === activeTab);
  }, [activeTab]);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null && filteredImages.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null && filteredImages.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Keyboard navigation (Arrow keys + Escape) & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredImages.length]);

  const currentImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      {/* 1. Direct Category Filter Tabs (No search bar, clean wrapping on desktop, touch scroll with no ugly scrollbars on mobile) */}
      <div className="w-full">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const count = categoryCounts[tab.id] || 0;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-brand-blue-700 text-white shadow-md shadow-brand-blue-900/20 scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:text-brand-blue-700 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Status Counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
        <div>
          Showing <span className="font-bold text-slate-900">{filteredImages.length}</span> samples in{' '}
          <span className="font-semibold text-brand-blue-700">
            {categoryTabs.find((t) => t.id === activeTab)?.label}
          </span>
        </div>
        <div className="hidden sm:block text-slate-400">
          Click any card to inspect full high-resolution image & specifications
        </div>
      </div>

      {/* 3. Highly Responsive Gallery Grid with Initial Information Prominently Visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-xl hover:border-brand-blue-300 transition-all duration-300 flex flex-col"
          >
            {/* Image Header with Zoom Action */}
            <div
              onClick={() => openLightbox(idx)}
              className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 opacity-40 group-hover:opacity-60 transition-opacity" />

              {/* Badges on Top of Image */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-slate-800 backdrop-blur-sm shadow-xs">
                  {img.category}
                </span>
                <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/95 text-white backdrop-blur-sm shadow-xs">
                  ₹0 Plate Cost
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="rounded-full bg-white/95 p-3 text-brand-blue-900 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Initial Information - Clearly Visible & Responsive Directly on the Card */}
            <div className="p-5 flex flex-1 flex-col justify-between space-y-4">
              <div>
                {/* Title */}
                <h3
                  onClick={() => openLightbox(idx)}
                  className="font-outfit text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-blue-700 transition-colors cursor-pointer leading-snug line-clamp-2"
                >
                  {img.title}
                </h3>

                {/* Structured Specs & Material Info */}
                <div className="mt-3.5 space-y-2 text-xs">
                  <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Layers className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider text-slate-500">
                        Layer Structure
                      </span>
                      <span className="text-slate-700 font-medium leading-relaxed">
                        {img.specs}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[11px] uppercase tracking-wider text-emerald-700">
                        Barrier & Finish
                      </span>
                      <span className="text-slate-700 font-medium leading-relaxed">
                        {img.barrier}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags / Features */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {img.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Interactive Actions on Every Card */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => openLightbox(idx)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>View Full Photo</span>
                </button>

                <a
                  href={companyInfo.contact.whatsappUrl(
                    `Hello Kakatiya Printers, I am interested in quote for "${img.title}" (${img.specs}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-xs shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Highly Responsive & Interactive Lightbox Modal */}
      {currentImage && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Modal Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] md:max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto border border-white/20"
          >
            {/* Close Button (Top right, prominent) */}
            <button
              onClick={closeLightbox}
              className="absolute top-3.5 right-3.5 z-20 rounded-full bg-slate-900/70 hover:bg-slate-900 p-2 text-white shadow-lg transition-transform active:scale-95"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Responsive Image Preview Canvas */}
            <div className="relative w-full md:w-7/12 h-64 sm:h-80 md:h-auto min-h-[260px] md:min-h-[460px] bg-slate-950 flex items-center justify-center select-none overflow-hidden">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain p-2 md:p-4"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />

              {/* Prev / Next Arrows inside image area */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-slate-900/60 hover:bg-slate-900 p-2.5 text-white transition-all hover:scale-105 active:scale-95"
                aria-label="Previous sample"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-slate-900/60 hover:bg-slate-900 p-2.5 text-white transition-all hover:scale-105 active:scale-95"
                aria-label="Next sample"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Photo Index Counter */}
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                {lightboxIndex! + 1} / {filteredImages.length}
              </div>
            </div>

            {/* Right: Scrollable Details & CTA Action Panel */}
            <div className="w-full md:w-5/12 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh] bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-brand-blue-50 px-2.5 py-0.5 text-xs font-bold text-brand-blue-700 border border-brand-blue-100">
                    {currentImage.category}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Sample
                  </span>
                </div>

                <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {currentImage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Manufactured at our Uppal, Hyderabad printing facility with cylinder-free digital flexo
                  technology. Guaranteed FSSAI food-grade certification and vibrant color fidelity.
                </p>

                {/* Technical Specs List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <span className="font-semibold text-slate-800">Layer Structure:</span>
                    <span className="text-slate-600 ml-1.5">{currentImage.specs}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Barrier Protection:</span>
                    <span className="text-slate-600 ml-1.5">{currentImage.barrier}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Cylinder Charges:</span>
                    <span className="text-emerald-700 font-bold ml-1.5">₹0 (Zero Plate Cost)</span>
                  </div>
                </div>

                {/* Finish & Feature Tags */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Finishes & Specifications
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentImage.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons in Lightbox */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <Link
                  href={companyInfo.contact.whatsappUrl(
                    `Hello Kakatiya Printers, I am viewing your gallery sample "${currentImage.title}" and would like a quote with similar specifications.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button
                    variant="whatsapp"
                    size="md"
                    className="w-full justify-center text-xs sm:text-sm"
                    leftIcon={<MessageCircle className="w-4 h-4 fill-current" />}
                  >
                    Quote This Sample on WhatsApp
                  </Button>
                </Link>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 px-1">
                  <span>Press &larr; / &rarr; keys to browse</span>
                  <Link href="/contact-us" className="text-brand-blue-700 font-semibold hover:underline">
                    Request Sample Kit &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
