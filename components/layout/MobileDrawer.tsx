'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Phone, MessageCircle, MapPin } from 'lucide-react';
import { NavItem } from '@/data/navigation';
import { companyInfo } from '@/data/company';
import { Button } from '@/components/ui/Button';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileDrawer({ isOpen, onClose, items }: MobileDrawerProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({ Services: true });

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className="fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="relative w-36 h-9">
              <Image
                src="/images/logos/Kakatiya-Logo-RGB.png"
                alt="Kakatiya Printers"
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = Boolean(expandedItems[item.label]);
            const isActive = pathname === item.href;

            if (hasChildren) {
              return (
                <div key={item.label} className="border-b border-slate-100 pb-2 mb-2">
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-brand-navy-900 font-outfit hover:text-brand-blue-700 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-brand-blue-700' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 py-1 space-y-1">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={`block py-2 text-sm rounded-md px-2.5 transition-colors ${
                            pathname === child.href
                              ? 'bg-brand-blue-50 text-brand-blue-700 font-semibold'
                              : 'text-slate-600 hover:text-brand-blue-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="font-medium text-slate-800">{child.label}</div>
                          <div className="text-xs text-slate-500 line-clamp-1">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`block py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-blue-50 text-brand-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-700'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs in Drawer Footer */}
        <div className="p-4 border-t border-slate-200 space-y-3 bg-slate-50">
          <Button
            href={companyInfo.whatsappUrl}
            variant="whatsapp"
            size="md"
            className="w-full"
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            WhatsApp Instant Quote
          </Button>

          <Button
            href={`tel:${companyInfo.phoneClean}`}
            variant="outline"
            size="md"
            className="w-full"
            leftIcon={<Phone className="w-4 h-4" />}
          >
            Call Factory Desk
          </Button>

          <div className="pt-2 flex items-start gap-2 text-xs text-slate-500">
            <MapPin className="w-4 h-4 shrink-0 text-brand-blue-700 mt-0.5" />
            <p className="line-clamp-2">{companyInfo.address.full}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
