# TECHNICAL ARCHITECTURE & SYSTEM DESIGN

**Project**: Kakatiya Printers Website Modernization  
**Stack**: Next.js 14+ (App Router) + TypeScript + Tailwind CSS  
**Author**: Senior Website Migration Architect & Content Analyst  
**Date**: November 15, 2026  

---

## 1. Architectural Philosophy & Technology Stack

The target application architecture replaces legacy WordPress dependencies (110 CSS files, 70 JS files, heavy PHP plugins, and external unmanaged CDN assets) with an ultra-fast, statically optimized modern React architecture.

### Core Stack
- **Framework**: **Next.js 14+ (App Router)** with Server Components (RSC) by default for maximum SEO and sub-second Time-to-First-Byte (TTFB).
- **Language**: **TypeScript (Strict mode)** for end-to-end type safety across content data models and component props.
- **Styling**: **Tailwind CSS v3+** + PostCSS, replacing all legacy CSS files with a single purged, minified, utility-first stylesheet (<15 KB compressed).
- **Icons**: **`lucide-react`** for lightweight, tree-shaken inline SVG icons (eliminating heavy FontAwesome font files).
- **Fonts**: **`next/font/google`** self-hosting `Outfit` (for bold, modern headings) and `Inter` (for crisp, legible body text) with zero layout shift (`adjustFontFallback: true`).
- **Form Management**: **React Hook Form** + **Zod** schema validation, with direct fallback to WhatsApp deep links and Next.js Server Actions for email delivery.
- **Asset Engine**: **`next/image`** for automated WebP/AVIF generation, responsive srcsets, lazy loading, and blurred placeholder generation.

---

## 2. Directory & Application Layout Structure

```
kakatiyaprinters/
├── app/
│   ├── layout.tsx                     # Global RootLayout (HTML, body, fonts, GTM script, Schema)
│   ├── page.tsx                       # Homepage (PAGE-HOME)
│   ├── not-found.tsx                  # Global 404 handler with branded recovery UI
│   ├── error.tsx                      # Client-side error boundary
│   ├── global-error.tsx               # Root layout error boundary
│   ├── loading.tsx                    # Top-level instant loading skeleton
│   ├── sitemap.ts                     # Automated dynamic XML sitemap generator
│   ├── robots.ts                      # Automated robots.txt generator
│   │
│   ├── (marketing)/                   # Route group sharing marketing layout (Header, Footer, Floating WhatsApp)
│   │   ├── about-us/
│   │   │   └── page.tsx               # About Us (PAGE-ABOUT)
│   │   ├── our-work/
│   │   │   └── page.tsx               # Portfolio Showcase (PAGE-WORK)
│   │   ├── gallery/
│   │   │   └── page.tsx               # Restored Filterable Gallery (PAGE-GALLERY)
│   │   ├── contact-us/
│   │   │   └── page.tsx               # Contact & Lead Form (PAGE-CONTACT)
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx               # Services Overview Hub (PAGE-SRV-HUB)
│   │   │   ├── pouch-printing-without-cylinder/
│   │   │   │   └── page.tsx           # Pouch Printing (PAGE-SRV-POUCH)
│   │   │   ├── roll-form-label-printing/
│   │   │   │   └── page.tsx           # Roll Form Labels (PAGE-SRV-LABEL)
│   │   │   ├── shrink-sleeves-printing/
│   │   │   │   └── page.tsx           # Shrink Sleeves (PAGE-SRV-SLEEVE)
│   │   │   ├── film-printing-services/
│   │   │   │   └── page.tsx           # Film Printing (PAGE-SRV-FILM)
│   │   │   └── flat-bottom-pouches/
│   │   │       └── page.tsx           # Flat Bottom Pouches (PAGE-SRV-FLAT)
│   │   │
│   │   ├── blogs/
│   │   │   ├── page.tsx               # Blog Index Directory (PAGE-BLOG-HUB)
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # Dynamic Blog Post Template (PAGE-BLOG-01 to 04)
│   │   │
│   │   ├── privacy-policy/
│   │   │   └── page.tsx               # Privacy Policy (PAGE-LEGAL-PRIV)
│   │   └── terms-of-service/
│   │       └── page.tsx               # Terms of Service (PAGE-LEGAL-TERMS)
│   │
│   └── api/
│       └── contact/
│           └── route.ts               # Contact form submission endpoint (Serverless)
│
├── components/
│   ├── layout/                        # Global structural components
│   │   ├── Header.tsx                 # Sticky navigation, mega dropdown, mobile drawer
│   │   ├── Footer.tsx                 # 4-column footer, newsletter, Google Map embed
│   │   ├── MobileDrawer.tsx           # Animated responsive navigation menu
│   │   ├── Breadcrumbs.tsx            # Semantic breadcrumb trail with JSON-LD
│   │   └── FloatingWhatsApp.tsx       # Bottom-right quick-access chat trigger
│   │
│   ├── sections/                      # Reusable full-width section blocks
│   │   ├── HeroSection.tsx            # Main hero with headline, dual CTAs, video/poster
│   │   ├── FeaturesGrid.tsx           # Cylinder-free benefits & comparison cards
│   │   ├── ServicesGrid.tsx           # Grid of service cards with badges & links
│   │   ├── PortfolioGrid.tsx          # Filterable packaging samples showcase
│   │   ├── MachinerySection.tsx       # Facility & manufacturing infrastructure
│   │   ├── TestimonialsSection.tsx    # Customer trust & case studies
│   │   ├── FaqAccordion.tsx           # Keyboard-accessible accordion FAQ
│   │   ├── BottomCtaBanner.tsx        # High-conversion bottom banner block
│   │   └── ContactForm.tsx            # Lead generation form with live validation
│   │
│   └── ui/                            # Atomic reusable UI elements
│       ├── Button.tsx                 # Primary, secondary, outline, WhatsApp variants
│       ├── Badge.tsx                  # "Low MOQ", "Zero Plate Cost" micro-pills
│       ├── Card.tsx                   # Elevated container card with hover effects
│       ├── Modal.tsx                  # Image lightbox / sample request modal
│       └── Input.tsx / Textarea.tsx   # Accessible form inputs with error states
│
├── content/ or data/                  # Strongly-typed static content models
│   ├── company.ts                     # Company metadata, address, phones, emails, social
│   ├── navigation.ts                  # Header, footer, and mobile link schemas
│   ├── services.ts                    # Detailed specs, features, FAQs for all services
│   ├── blogs.ts                       # Structured blog articles, content, reading times
│   ├── portfolio.ts                   # Catalog of real samples mapped to assets
│   └── testimonials.ts                # Client feedback & case summaries
│
├── types/                             # TypeScript type definitions
│   ├── service.ts                     # Service data interfaces
│   ├── blog.ts                        # Blog article interfaces
│   ├── portfolio.ts                   # Portfolio & image catalog interfaces
│   └── navigation.ts                  # Navigation link & dropdown interfaces
│
├── public/                            # Static asset directory
│   ├── images/
│   │   ├── logos/                     # Brand logos (Color, RGB, transparent)
│   │   ├── products/                  # 12 high-res Artboard product renders
│   │   ├── samples/                   # 17 real WhatsApp packaging photographs
│   │   ├── facility/                  # Plant, machinery, and building photos
│   │   └── blogs/                     # Featured blog article headers
│   └── favicon.ico, site.webmanifest
│
├── next.config.mjs                    # Redirects, headers, image optimization rules
├── tailwind.config.ts                 # Brand color tokens, typography, container settings
├── tsconfig.json                      # Path aliases (@/components, @/data, etc.)
└── package.json
```

---

## 3. Data Architecture & Type Definitions

To guarantee maximum speed and effortless maintainability, all content is decoupled into strongly-typed TypeScript data modules.

### 3.1 Content Schema Samples

```typescript
// types/service.ts
export interface ServiceSpec {
  materialOptions: string[];
  thicknessRange: string;
  pouchStyles: string[];
  barrierLevels: ('Moisture' | 'Oxygen' | 'Aroma' | 'Light')[];
  minimumOrderQuantity: string;
  leadTime: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  heroHeadline: string;
  heroImage: string;
  specifications: ServiceSpec;
  keyBenefits: { title: string; description: string; icon: string }[];
  industriesServed: { name: string; description: string; icon: string }[];
  faqs: { question: string; answer: string }[];
}
```

```typescript
// types/blog.ts
export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage: string;
  publishedAt: string;
  readTimeMinutes: number;
  author: string;
  excerpt: string;
  contentHtml: string;
  tags: string[];
  relatedServices: string[]; // Slugs of services referenced in article
}
```

---

## 4. Image Asset Organization

The 47 downloaded image assets from `reference/images/` are organized into clean semantic subdirectories within `public/images/`:

| Directory | Source Assets from Reference | Target Use Case |
|-----------|------------------------------|-----------------|
| `public/images/logos/` | `Color-Logo_png_0a5c90da.png`, `Kakatiya-Logo-RGB_png_c580851d.png`, `Kakatiya-Logo-RGB-1024x_41a949de.png` | Global header, footer, favicon, OG default image |
| `public/images/products/` | `Artboard-1-scaled_jpg_2895e353.jpg` through `Artboard-12-scaled...` (12 files) | Product render showcases on Home, Our Work, Services |
| `public/images/samples/` | 17 `WhatsApp-Image-2025-11-*.jpeg` files | Real finished product proof on Our Work, Gallery, and Service spec tabs |
| `public/images/facility/` | `building_webp_adaaa444.webp`, `Untitled-design-81_jpg_5fe82752.jpg`, `33_jpg_f4f014f9.jpg` | About Us factory infrastructure, press machinery |
| `public/images/blogs/` | `Best-Printing-Company-i_3de89d28.jpeg`, `How-to-Reduce-Packaging_cc550150.jpg`, `How-Shrink-Sleeve-Label_65a06b8d.jpg`, `pouch-printing-without-_9791f57f.jpg` | Featured blog header covers & blog index cards |
| `public/images/hero/` | `Kakatiya-Printers-pouch_91903e9b.jpg`, `pouch-printing-without-_ccfa7cf1.jpg`, `wmremove-transformed-*.png` | Wide hero banners and transparent pouch mockups |

### Optimization Strategy
- Render images using `next/image` with explicit `sizes` attributes.
- Automatically serve modern formats (`image/avif`, `image/webp`).
- Provide low-quality image placeholder (LQIP) blur strings for above-the-fold images to achieve Core Web Vitals LCP < 1.2s.

---

## 5. SEO & Structured Data (JSON-LD) Architecture

Search engine optimization is embedded natively through Next.js metadata objects and JSON-LD schema scripts.

### 5.1 Centralized Metadata Configuration
Every page will export a dynamic or static `Metadata` object conforming to OpenGraph and Twitter specifications:
```typescript
// Sample Metadata Strategy
export const metadata: Metadata = {
  metadataBase: new URL('https://kakatiyaprinters.com'),
  title: {
    default: 'Pouch Printing Without Cylinder | Kakatiya Printers Hyderabad',
    template: '%s | Kakatiya Printers'
  },
  description: 'Premier cylinder-free flexible packaging and custom pouch printing in Hyderabad. Low MOQ, fast turnaround, high-barrier food grade pouches.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kakatiyaprinters.com',
    siteName: 'Kakatiya Printers',
    images: [{ url: '/images/logos/Color-Logo.png', width: 1187, height: 314 }]
  }
};
```

### 5.2 Structured Data Schemas (JSON-LD)
1. **`LocalBusiness` & `Organization` (Injected in RootLayout)**:
   - Includes legal name, physical address (`IDA Uppal, Ramanthapur, Hyderabad 500039`), geo-coordinates, telephone (`+919391014493`), official email, and opening hours.
2. **`Service` Schema (Injected on all `/services/*` pages)**:
   - Details provider, service area (India), terms, and pouch specs.
3. **`BreadcrumbList` Schema (Injected across all child routes)**:
   - Preserves Google search rich result path snippets.
4. **`BlogPosting` Schema (Injected on dynamic `/blogs/[slug]` pages)**:
   - Includes headline, datePublished, author, image, and publisher.
5. **`FAQPage` Schema (Injected on service pages and Home)**:
   - Boosts SERP real estate by generating interactive question-and-answer accordions in Google search results.

---

## 6. Shared Layouts & Error Handling Architecture

### 6.1 `RootLayout` (`app/layout.tsx`)
- Embeds HTML5 doctype with `lang="en"`.
- Loads font variables (`font-outfit` and `font-inter`).
- Injects Google Tag Manager script (`GTM-W9C6XQND`) via `next/script` with `strategy="afterInteractive"`.
- Wraps body in global styling classes with standard antialiasing and selection colors.

### 6.2 `MarketingLayout` (`app/(marketing)/layout.tsx`)
- Houses the sticky `Header`, `Breadcrumbs` bar (where applicable), page children, `BottomCtaBanner`, `Footer`, and the fixed `FloatingWhatsApp` button.

### 6.3 Resilience & Error Boundaries
- **`app/not-found.tsx`**: Custom 404 page featuring a clear explanation, direct search bar, quick links to top services, and a "Chat on WhatsApp" button to retain lost visitors.
- **`app/error.tsx`**: Client-side error boundary that logs component errors, presents a graceful "Something went wrong" message, and offers a "Try Again" retry action.
- **`app/loading.tsx`**: High-performance animated skeleton screen matching header, hero, and card placeholders to eliminate perceived loading latency.
