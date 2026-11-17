# WEBSITE SITEMAP & INFORMATION ARCHITECTURE

**Project**: Kakatiya Printers Website Modernization & Replatforming  
**Framework Target**: Next.js App Router (TypeScript)  
**Author**: Senior Website Migration Architect & Content Analyst  
**Date**: November 15, 2026  

---

## 1. Information Architecture Overview

The new site architecture elevates Kakatiya Printers from an unstructured collection of WordPress pages into a modern, logically categorized B2B industrial packaging platform. 

### Core Architectural Objectives
1. **Preserve SEO Authority**: Maintain clean backwards-compatibility and 301 redirects for every legacy Google-indexed URL.
2. **Resolve Step 1 Anomalies**:
   - Establish a dedicated `/services` overview hub (resolving the broken footer `/services` link).
   - Reconstruct the missing `/gallery` page into a high-performance visual catalog using the 47 master assets.
   - Formalize `/services/flat-bottom-pouches` (previously an uncrawled dangling link in blogs and film services).
   - Normalize `/about` -> `/about-us`.
3. **Structured Hierarchy**: Organize services under `/services/*` and blog posts under `/blogs/*` while supporting seamless root redirects for existing top-level rankings.
4. **Legal Compliance**: Add missing mandatory Indian B2B compliance pages (`/privacy-policy`, `/terms-of-service`).

---

## 2. Complete Visual Sitemap Tree

```
kakatiyaprinters.com/
│
├── (1.0) Home (/)
│
├── (2.0) Company
│   ├── About Us (/about-us)
│   ├── Our Work & Portfolio (/our-work)
│   └── Visual Gallery (/gallery)
│
├── (3.0) Services Hub (/services)
│   ├── Pouch Printing Without Cylinder (/services/pouch-printing-without-cylinder)
│   ├── Roll Form Label Printing (/services/roll-form-label-printing)
│   ├── Shrink Sleeves Printing (/services/shrink-sleeves-printing)
│   ├── Film Printing Services (/services/film-printing-services)
│   └── Flat Bottom Pouches (/services/flat-bottom-pouches) [New / Resolved]
│
├── (4.0) Knowledge & Insights (/blogs)
│   ├── Best Printing Company in Hyderabad (/blogs/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder)
│   ├── How to Reduce Packaging Costs (/blogs/how-to-reduce-packaging-costs-without-compromising-quality)
│   ├── How Shrink Sleeve Labels Boost Product Visibility (/blogs/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity)
│   └── Pouch Printing for Small Businesses (/blogs/pouch-printing-without-cylinder-why-it-matters-for-small-businesses)
│
├── (5.0) Customer Direct (/contact-us)
│   ├── General Inquiries & Factory Visits
│   └── Instant WhatsApp Quote Dispatch
│
└── (6.0) Legal & Compliance
    ├── Privacy Policy (/privacy-policy) [New]
    └── Terms & Conditions (/terms-of-service) [New]
```

---

## 3. Detailed Page Hierarchy & Specifications

### 3.1 Primary Tier: Core Pages
| Page ID | URL Path | Page Title | Purpose & Primary Content | Parent |
|---------|----------|------------|---------------------------|--------|
| `PAGE-HOME` | `/` | Pouch Printing Without Cylinder in Hyderabad \| Kakatiya Printers | Flagship landing page: Cylinder-free packaging value prop, hero video/poster, services summary, 12 Artboard product renders, machinery, testimonials, FAQ, dual CTAs. | None (Root) |
| `PAGE-ABOUT` | `/about-us` | About Kakatiya Printers \| Leading Packaging & Printing Partner India | Company background, Mission, Vision, Uppal factory infrastructure, eco-friendly inks, quality certifications. | Root |
| `PAGE-WORK` | `/our-work` | Our Packaging Work \| Custom Pouches, Labels & Sleeves Showcase | Curated client portfolio across stand-up pouches, roll labels, shrink sleeves, and FFS film rolls. | Root |
| `PAGE-GALLERY` | `/gallery` | Packaging Gallery & Factory Samples \| Kakatiya Printers | Interactive filterable visual gallery showing real manufacturing runs and high-resolution packaging finishes. | Root |
| `PAGE-CONTACT` | `/contact-us` | Contact Kakatiya Printers \| Request a Custom Quote \| Uppal, Hyderabad | Lead-capture inquiry form, direct WhatsApp triggers, telephone support, email, and embedded Google Map for Uppal IDA plant. | Root |

### 3.2 Secondary Tier: Services Hub & Child Service Pages
| Page ID | URL Path | Page Title | Technical Focus | Parent |
|---------|----------|------------|-----------------|--------|
| `PAGE-SRV-HUB` | `/services` | Custom Flexible Packaging & Printing Services \| Kakatiya Printers | Central index covering all 5 core manufacturing capabilities with comparison matrices and material guides. | Root |
| `PAGE-SRV-POUCH`| `/services/pouch-printing-without-cylinder` | Pouch Printing Without Cylinder \| Custom Stand-Up Zipper Pouches | Zero-cylinder digital pouch printing: Zipper pouches, 3-side seal, food-grade barrier films, soft-touch matte & gloss finishes. | `/services` |
| `PAGE-SRV-LABEL`| `/services/roll-form-label-printing` | Roll Form Label Printing \| Custom Self-Adhesive Product Labels | High-speed automatic dispensing roll labels: Chromo, PP, transparent, metallic, and deep-freeze adhesives. | `/services` |
| `PAGE-SRV-SLEEVE`| `/services/shrink-sleeves-printing` | Shrink Sleeves Printing \| 360° Custom Bottle & Jar Labels | Full-body contour sleeve labels: PVC, PET-G (up to 75% shrink), tamper-evident neck bands, reverse-printed graphics. | `/services` |
| `PAGE-SRV-FILM` | `/services/film-printing-services` | Flexible Packaging Film Printing \| Form-Fill-Seal (FFS) Rolls | Continuous printed laminate rolls: BOPP, CPP, Polyester, LDPE for high-speed automated packaging lines. | `/services` |
| `PAGE-SRV-FLAT` | `/services/flat-bottom-pouches` | Flat Bottom Pouches Printing \| Box Pouches & Quad Seal Bags | Premium 5-panel box pouches for coffee, pet food, dry fruits, and gourmet items with high shelf stability. | `/services` |

### 3.3 Tertiary Tier: Educational Articles & Insights
| Page ID | URL Path | Page Title | Content Category | Parent |
|---------|----------|------------|------------------|--------|
| `PAGE-BLOG-HUB` | `/blogs` | Packaging Insights, Guides & Industry Trends \| Kakatiya Printers | Filterable blog index with search, reading time, and category tags. | Root |
| `PAGE-BLOG-01` | `/blogs/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder` | Best Printing Company in Hyderabad for Pouch Printing Without Cylinder | Local SEO & Ecosystem Guide (Uppal, Cherlapally, Kattedan) | `/blogs` |
| `PAGE-BLOG-02` | `/blogs/how-to-reduce-packaging-costs-without-compromising-quality` | How to Reduce Packaging Costs Without Compromising Quality | Commercial Guide: Cylinder elimination, right-sizing, barrier selection | `/blogs` |
| `PAGE-BLOG-03` | `/blogs/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity` | How Shrink Sleeve Labels Boost Product Visibility & Brand Identity | Design Guide: 360-degree storytelling, tamper evidence, container curves | `/blogs` |
| `PAGE-BLOG-04` | `/blogs/pouch-printing-without-cylinder-why-it-matters-for-small-businesses` | Pouch Printing Without Cylinder: Why It Matters for Small Businesses | Startup Guide: Low MOQs, multi-SKU agility, zero plate risk | `/blogs` |

### 3.4 Quaternary Tier: Legal, Regulatory & Utility Pages
| Page ID | URL Path | Page Title | Compliance Purpose | Parent |
|---------|----------|------------|--------------------|--------|
| `PAGE-LEGAL-PRIV` | `/privacy-policy` | Privacy Policy \| Kakatiya Printers | Discloses data collection via contact forms, Google Analytics 4, and GTM. | Root |
| `PAGE-LEGAL-TERMS`| `/terms-of-service` | Terms of Service & Custom Order Conditions \| Kakatiya Printers | Custom printing specifications, artwork approval process, and delivery terms. | Root |
| `PAGE-UTIL-404` | `/not-found` | 404 - Page Not Found \| Kakatiya Printers | Custom branded 404 recovery page with search bar and quick service shortcuts. | Root |

---

## 4. Navigation Architecture

### 4.1 Primary Header Navigation (Desktop)
```
[Brand Logo] (Links to /)
│
├── Home (/)
├── About Us (/about-us)
├── Services [Dropdown / Mega Menu Hover]:
│   ├── Pouch Printing Without Cylinder (/services/pouch-printing-without-cylinder)
│   ├── Roll Form Label Printing (/services/roll-form-label-printing)
│   ├── Shrink Sleeves Printing (/services/shrink-sleeves-printing)
│   ├── Film Printing Services (/services/film-printing-services)
│   └── Flat Bottom Pouches (/services/flat-bottom-pouches)
├── Our Work (/our-work)
├── Gallery (/gallery)
├── Blogs (/blogs)
└── Contact Us (/contact-us)
│
└── [Header CTA Button]: "Get Quick Quote" (Pill Button with WhatsApp Icon)
    └── Direct Action: WhatsApp Chat (+91 93910 14493)
```

### 4.2 Mobile Off-Canvas Drawer Navigation
- **Header Viewport**: Logo + Tap-to-Call icon (`tel:+919391014493`) + Animated Hamburger Toggle.
- **Drawer Contents**:
  - Full navigation links with collapsible accordion for `Services`.
  - Quick action card: "Need immediate quotation? Chat with our packaging engineer on WhatsApp".
  - One-tap buttons: "WhatsApp Quote" (Green) and "Call Factory" (Blue).
  - Physical address snippet with direct Google Maps link.

### 4.3 Footer Navigation Architecture (4 Columns)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [Column 1: Company Profile]                                                            │
│ • Full Color Logo                                                                      │
│ • "Specializing in high-quality cylinder-free flexible packaging and custom labels."    │
│ • Factory Address: I.D.A, Uppal, Laxmi Narayan Nagar Colony, Ramanthapur, Hyderabad    │
│ • Direct Phone: +91 93910 14493 | Email: info@kakatiyaprinters.com                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Column 2: Packaging Services]                                                         │
│ • Pouch Printing Without Cylinder                                                      │
│ • Roll Form Label Printing                                                             │
│ • Shrink Sleeves Printing                                                              │
│ • Film Printing Services                                                               │
│ • Flat Bottom Pouches                                                                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Column 3: Quick Links & Resources]                                                    │
│ • About Us (/about-us)                                                                 │
│ • Our Portfolio (/our-work)                                                            │
│ • Packaging Gallery (/gallery)                                                         │
│ • Blog & Case Studies (/blogs)                                                         │
│ • Contact Us (/contact-us)                                                             │
│ • Privacy Policy (/privacy-policy)                                                     │
│ • Terms & Conditions (/terms-of-service)                                               │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Column 4: Newsletter & Direct Connect]                                                │
│ • "Stay updated on packaging innovations & cost-saving tips."                          │
│ • Email Input + Submit Button ("Subscribe")                                            │
│ • Social Links: Facebook, Instagram, YouTube, LinkedIn                                 │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [Bottom Bar]                                                                           │
│ • © 2026 Kakatiya Printers. All Rights Reserved.                                       │
│ • Full-Width Interactive Google Maps Embed (Uppal Industrial Area)                     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Breadcrumb Navigation System

Breadcrumbs enhance UX on complex B2B sites and generate Google `BreadcrumbList` rich snippets.

### Rules for Breadcrumb Display:
1. **Homepage (`/`)**: Hidden.
2. **Top-Level Pages (`/about-us`, `/our-work`, `/gallery`, `/contact-us`, `/services`, `/blogs`)**:
   `Home > Page Title`
3. **Child Service Pages**:
   `Home > Services > Pouch Printing Without Cylinder`
   *(URL: `/services/pouch-printing-without-cylinder`)*
4. **Child Blog Post Pages**:
   `Home > Blogs > Pouch Printing Without Cylinder for Small Businesses`
   *(URL: `/blogs/pouch-printing-without-cylinder-why-it-matters-for-small-businesses`)*

---

## 6. Reusable Section Templates

Across all pages, the following standardized layout components will be utilized:

1. **`GlobalHeader`**: Fixed sticky navigation bar with active route highlighting, dropdown menus, and instant WhatsApp quote button.
2. **`GlobalFooter`**: Standardized 4-column layout with company info, service links, quick links, newsletter form, and Google Maps iframe.
3. **`FloatingWhatsAppCTA`**: Fixed bottom-right pulsing button on mobile/desktop for instant 1-click consultation.
4. **`ServiceHeroBanner`**: Standardized header block for all service pages containing:
   - Category badge (e.g., "Zero Plate Costs").
   - Primary H1 heading.
   - 2-3 paragraph overview with bulleted key specifications.
   - Dual CTAs: "Get Instant Quote on WhatsApp" and "Request Sample Kit".
   - Hero product render image with soft shadow.
5. **`BottomCtaBanner`**: Replaces the legacy 1.06 MB `Bottom-Banner.png` with a clean, high-performance responsive section featuring dynamic text, verified client counters ("Over 500+ Brands Packed"), and high-contrast conversion buttons.
6. **`FaqAccordionSection`**: Accessible, keyboard-navigable accordion widget to answer technical and commercial questions without visual clutter.
