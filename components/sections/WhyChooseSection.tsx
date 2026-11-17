import React from 'react';
import {
  Zap,
  Clock,
  Sparkles,
  Layers,
  ShieldCheck,
  Palette,
  CheckCircle,
  Award,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

const pillars = [
  {
    icon: <Zap className="w-6 h-6 text-brand-blue-700" />,
    title: 'Cylinder-Free Printing Technology',
    description:
      'Our advanced digital printing setup eliminates the need for costly cylinders, saving you time and setup charges. Launch new products faster and print multiple designs with no cylinder fees.',
  },
  {
    icon: <Clock className="w-6 h-6 text-brand-blue-700" />,
    title: 'Assured Fast Delivery',
    description:
      'We understand that timely delivery is critical. With 100% in-house facilities and disciplined production, we ensure your printed pouches and packaging materials are ready within 7–10 days — not weeks.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-blue-700" />,
    title: 'High-Definition Print Quality',
    description:
      'We combine precision color calibration with world-class digital presses to deliver vibrant, detailed, and consistent printing on every pouch. Whether matte, glossy, or metallic, your packaging always stands out.',
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-blue-700" />,
    title: 'Bulk & Short-Run Flexibility',
    description:
      'From 500 pieces to 50,000+, we cater to both short runs and large-volume packaging requirements. Our scalable process ensures consistent quality for startups and established enterprises alike.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent-green-600" />,
    title: 'Food-Grade & Eco-Safe Materials',
    description:
      'We use certified food-grade multi-layer laminates and non-toxic inks to ensure safety and freshness. Our barrier materials comply with FSSAI regulations and export standards.',
  },
  {
    icon: <Palette className="w-6 h-6 text-brand-blue-700" />,
    title: 'Custom Prepress Design Assistance',
    description:
      'Our in-house design and prepress experts help you visualize your packaging before printing. Whether you need artwork adjustments, bleed alignment, or 3D digital mockups, we bring your vision to life.',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-brand-blue-700" />,
    title: 'Quality Check at Every Step',
    description:
      'Each project undergoes a strict quality assurance process — from raw substrate inspection to spectrophotometer color verification and lamination bond testing for zero leakage.',
  },
  {
    icon: <Award className="w-6 h-6 text-brand-blue-700" />,
    title: 'Trusted Since 1998',
    description:
      'For over 25 years, Kakatiya Printers has been the preferred packaging partner for leading brands across food, agriculture, personal care, and pharmaceuticals in India.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Kakatiya Printers"
          title="Why Businesses Trust Us for Flexible Packaging"
          subtitle="We eliminate traditional printing bottlenecks with zero cylinder charges, rapid turnarounds, and uncompromised food-grade barrier quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              hoverEffect
              borderVariant="subtle"
              className="p-6 flex flex-col justify-between h-full bg-slate-50/50 hover:bg-white"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-brand-navy-900 font-outfit mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-inter">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
