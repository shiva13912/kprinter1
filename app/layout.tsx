import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kakatiyaprinters.com'),
  title: {
    default: 'Pouch Printing Without Cylinder | Kakatiya Printers Hyderabad',
    template: '%s | Kakatiya Printers',
  },
  description:
    'Custom flexible packaging, pouch printing without cylinder, roll form labels, and shrink sleeves in Hyderabad, India. Zero cylinder charges, low MOQs, and 7-day turnaround.',
  keywords: [
    'pouch printing without cylinder',
    'custom pouch printing hyderabad',
    'roll form label printing',
    'shrink sleeves printing',
    'flexible packaging manufacturer hyderabad',
    'food packaging pouches',
    'zipper pouches hyderabad',
  ],
  authors: [{ name: 'Kakatiya Printers' }],
  creator: 'Kakatiya Printers',
  publisher: 'Kakatiya Printers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kakatiyaprinters.com',
    siteName: 'Kakatiya Printers',
    title: 'Pouch Printing Without Cylinder | Kakatiya Printers Hyderabad',
    description:
      'Zero cylinder charges, low MOQs, and fast delivery for custom stand-up zipper pouches and roll labels in Hyderabad.',
    images: [
      {
        url: '/images/hero/pouch-printing-hyderabad-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kakatiya Printers - Cylinder-Free Flexible Packaging',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pouch Printing Without Cylinder | Kakatiya Printers Hyderabad',
    description:
      'Zero cylinder charges, low MOQs, and fast delivery for custom stand-up zipper pouches and roll labels in Hyderabad.',
    images: ['/images/hero/pouch-printing-hyderabad-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased font-inter flex flex-col selection:bg-brand-blue-100 selection:text-brand-blue-900">
        {children}
      </body>
    </html>
  );
}
