'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '@/data/company';
import { footerServices, footerQuickLinks } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-brand-navy-950 text-white border-t border-slate-800">
      {/* Main 4-Column Widget Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-12 bg-white rounded-lg p-2 shadow-sm">
                <Image
                  src="/images/logos/Color-Logo.png"
                  alt="Kakatiya Printers"
                  fill
                  className="object-contain p-1"
                  sizes="200px"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We specialize in high-quality custom cylinder-free flexible packaging and roll labels, empowering Indian startups and established FMCG brands with zero plate costs and low MOQs.
            </p>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan-500 shrink-0 mt-0.5" />
                <span>{companyInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan-500 shrink-0" />
                <a href={`tel:${companyInfo.phoneClean}`} className="hover:text-white transition-colors">
                  {companyInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan-500 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-whatsapp hover:bg-accent-whatsapp-hover text-white text-xs font-semibold rounded-lg shadow-whatsapp transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Column 2: Packaging Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-outfit border-b border-slate-800 pb-2">
              Packaging Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerServices.map((srv) => (
                <li key={srv.href}>
                  <Link
                    href={srv.href}
                    className="hover:text-brand-cyan-500 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>{srv.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Certified Food Grade Films</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links & Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-outfit border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-cyan-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Connect (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-outfit border-b border-slate-800 pb-2">
              Stay in Touch
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subscribe to our monthly packaging brief for technical cost-saving tips, substrate updates, and case studies.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Kakatiya Printers!');
              }}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-10 bg-slate-900 border border-slate-700 rounded-lg px-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue-500 focus:ring-1 focus:ring-brand-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full h-9 bg-brand-blue-700 hover:bg-brand-blue-600 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Subscribe to Newsletter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="pt-3">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                Connect on Social Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-blue-700 text-white flex items-center justify-center text-xs transition-colors"
                  aria-label="Kakatiya Printers Facebook"
                >
                  FB
                </a>
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center text-xs transition-colors"
                  aria-label="Kakatiya Printers Instagram"
                >
                  IG
                </a>
                <a
                  href={companyInfo.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center text-xs transition-colors"
                  aria-label="Kakatiya Printers YouTube"
                >
                  YT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Google Maps Viewport */}
      <div className="border-t border-slate-800/80 bg-brand-navy-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <MapPin className="w-4 h-4 text-brand-cyan-500" />
              <span>Manufacturing Facility: Uppal Industrial Development Area (IDA), Hyderabad</span>
            </div>
            <a
              href="https://maps.google.com/?q=Kakatiya+Printers+Uppal+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-cyan-500 hover:underline inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-800 shadow-inner">
            <iframe
              src={companyInfo.mapEmbedUrl}
              title="Kakatiya Printers Uppal Facility Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-slate-900 bg-brand-navy-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-slate-300 transition-colors">
              Factory Visit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
