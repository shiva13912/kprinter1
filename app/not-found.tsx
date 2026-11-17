import Link from 'next/link';
import { ArrowLeft, Home, MessageCircle, PackageSearch } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-brand-blue-50 text-brand-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <PackageSearch className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-700 bg-brand-blue-50 px-3 py-1 rounded-full border border-brand-blue-100">
          404 Error
        </span>
        <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-3 font-outfit">
          Packaging Page Not Found
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          The packaging specification or page you requested could not be located.
          It might have been moved or updated during our website upgrade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue-700 hover:bg-brand-blue-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/919391014493?text=Hello%20Kakatiya%20Printers%2C%20I%20was%20looking%20for%20a%20page%20and%20got%20404"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-whatsapp hover:bg-accent-whatsapp-hover text-white text-sm font-medium rounded-lg shadow-whatsapp transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
