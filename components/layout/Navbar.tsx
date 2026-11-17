'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  Package,
  Tag,
  Layers,
  Sparkles,
  Box,
  ArrowRight,
  MapPin,
  Clock,
} from 'lucide-react';
import { NavItem } from '@/data/navigation';
import { companyInfo } from '@/data/company';
import { MobileDrawer } from './MobileDrawer';

interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Filter out 'Contact Us' from desktop center links so it is unified into the right action
  const desktopNavItems = items.filter((item) => item.href !== '/contact-us');

  // Listen to scroll to provide subtle elevation & shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Icon mapping for services dropdown
  const getServiceIcon = (slug: string) => {
    if (slug.includes('pouch-printing')) return Package;
    if (slug.includes('roll-form')) return Tag;
    if (slug.includes('shrink-sleeves')) return Sparkles;
    if (slug.includes('film-printing')) return Layers;
    return Box;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-brand-blue-700 group"
          >
            <div className="relative w-44 sm:w-52 h-11 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/logos/Kakatiya-Logo-RGB.png"
                alt="Kakatiya Printers - Cylinder-Free Flexible Packaging"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 180px, 220px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Centered, whitespace-nowrap, interactive pill hovers) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {desktopNavItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                pathname === item.href || (hasChildren && pathname.startsWith('/services'));

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-brand-blue-50 text-brand-blue-700 font-semibold shadow-xs'
                          : 'text-slate-700 hover:text-brand-blue-700 hover:bg-slate-100/80'
                      }`}
                      aria-expanded={servicesDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-brand-blue-700' : 'text-slate-400'
                        }`}
                      />
                    </Link>

                    {/* Interactive Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 w-[420px] z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-3 overflow-hidden">
                          <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              Flexible Packaging Lines
                            </span>
                            <span className="text-[10px] font-semibold text-brand-blue-700 bg-brand-blue-50 px-2 py-0.5 rounded-full border border-brand-blue-100">
                              Zero Plate Cost
                            </span>
                          </div>

                          <div className="space-y-1">
                            {item.children?.map((child) => {
                              const Icon = getServiceIcon(child.href);
                              const isChildActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group/child ${
                                    isChildActive
                                      ? 'bg-brand-blue-50 text-brand-blue-700'
                                      : 'hover:bg-slate-50 text-slate-700 hover:translate-x-1'
                                  }`}
                                >
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                      isChildActive
                                        ? 'bg-brand-blue-600 text-white'
                                        : 'bg-slate-100 text-slate-600 group-hover/child:bg-brand-blue-100 group-hover/child:text-brand-blue-700'
                                    }`}
                                  >
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-semibold text-slate-900 group-hover/child:text-brand-blue-700 font-outfit">
                                        {child.label}
                                      </span>
                                      {child.badge && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 group-hover/child:bg-brand-blue-50 group-hover/child:text-brand-blue-700 shrink-0">
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                      {child.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1 flex items-center justify-between text-xs bg-slate-50/70 -mx-3 -mb-3 p-3">
                            <span className="text-slate-600">Need dieline templates?</span>
                            <Link
                              href="/services"
                              className="font-semibold text-brand-blue-700 hover:text-brand-blue-800 flex items-center gap-1"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-brand-blue-50 text-brand-blue-700 font-semibold shadow-xs'
                      : 'text-slate-700 hover:text-brand-blue-700 hover:bg-slate-100/80 active:scale-95'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Unified Interactive "Contact Us" Hub (Right Side) */}
          <div
            className="hidden lg:flex items-center relative"
            onMouseEnter={() => setContactDropdownOpen(true)}
            onMouseLeave={() => setContactDropdownOpen(false)}
          >
            {/* Unified Action Button */}
            <Link
              href="/contact-us"
              className="group/btn inline-flex items-center gap-2 pl-4 pr-3.5 py-2.5 rounded-full bg-brand-blue-700 hover:bg-brand-blue-800 text-white text-sm font-semibold shadow-md shadow-brand-blue-900/15 hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <span>Contact Us</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 group-hover/btn:bg-emerald-400 text-white text-xs font-bold transition-colors">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Quote</span>
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-brand-blue-200 transition-transform duration-200 ${
                  contactDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </Link>

            {/* Interactive Quick-Connect Dropdown Popover */}
            {contactDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 overflow-hidden">
                  <div className="px-3 py-2 border-b border-slate-100 mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Plant Connect
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Support
                    </span>
                  </div>

                  {/* 1. Instant WhatsApp Quote */}
                  <a
                    href={companyInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/70 transition-all group/item border border-transparent hover:border-emerald-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-emerald-700 flex items-center justify-between">
                        <span>WhatsApp Quick Quote</span>
                        <ArrowRight className="w-3 h-3 text-emerald-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Send dielines, get pricing in minutes
                      </p>
                      <span className="inline-block text-[11px] font-semibold text-emerald-700 mt-1">
                        +91 93910 14493
                      </span>
                    </div>
                  </a>

                  {/* 2. Direct Phone Call */}
                  <a
                    href={`tel:${companyInfo.phoneClean}`}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-blue-50/70 transition-all group/item border border-transparent hover:border-brand-blue-200 mt-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-brand-blue-700 flex items-center justify-between">
                        <span>Call Factory Engineer</span>
                        <ArrowRight className="w-3 h-3 text-brand-blue-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Mon – Sat: 9:30 AM – 7:30 PM IST
                      </p>
                      <span className="inline-block text-[11px] font-semibold text-brand-blue-700 mt-1">
                        +91 93910 14493
                      </span>
                    </div>
                  </a>

                  {/* 3. Inquiry Form & Plant Visit */}
                  <Link
                    href="/contact-us"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors mt-2 text-xs font-semibold text-slate-800 hover:text-brand-blue-700"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue-600" />
                      <span>Visit Uppal Plant / Inquiry Form</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Maintains full navigation including Contact Us) */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={items}
      />
    </>
  );
}
