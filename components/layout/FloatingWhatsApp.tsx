'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyInfo } from '@/data/company';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds on initial load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Desktop Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-brand-navy-900 text-white text-xs py-2 px-3.5 rounded-xl shadow-lg border border-slate-700 animate-in fade-in slide-in-from-right-2 duration-200">
          <span className="font-medium">Need instant pricing? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kakatiya Printers on WhatsApp"
        className="relative w-14 h-14 bg-accent-whatsapp hover:bg-accent-whatsapp-hover text-white rounded-full flex items-center justify-center shadow-whatsapp hover:scale-105 active:scale-95 transition-all duration-150 animate-whatsapp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white" />
        {/* Active status dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white border-2 border-accent-whatsapp rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-ping" />
        </span>
      </a>
    </div>
  );
}
