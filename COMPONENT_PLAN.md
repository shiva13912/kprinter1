# COMPONENT ARCHITECTURE & DESIGN SYSTEM PLAN

**Project**: Kakatiya Printers Website Modernization  
**Component Model**: React Server Components (RSC) & Client Components (`"use client"`)  
**Styling**: Tailwind CSS + `lucide-react`  
**Author**: Senior Website Migration Architect & Content Analyst  
**Date**: November 15, 2026  

---

## 1. Component Philosophy & Boundaries

The component tree strictly separates **Server Components (RSC)** for fast data fetching and zero-bundle HTML rendering from **Client Components (`"use client"`)** for stateful interactions (menus, accordions, modals, and forms).

### Server vs. Client Boundary Rules:
- **Default to Server Component**: Headers, footers, article bodies, static marketing sections, and grids run on the server.
- **Client Components (`"use client"`)**: Used strictly when DOM events or browser APIs are required:
  - `MobileDrawer.tsx` (stateful open/close toggle)
  - `FaqAccordion.tsx` (expand/collapse state)
  - `ContactForm.tsx` (form submission, input state, validation)
  - `ImageLightboxModal.tsx` (modal zoom and category switching in the gallery)
  - `FloatingWhatsApp.tsx` (scroll position listener and pulse animations)

---

## 2. Global Layout Components

### 2.1 `Header.tsx`
- **Role**: Sticky top navigation bar.
- **Structure**:
  - Left: Brand Logo (`Kakatiya-Logo-RGB.png` inside `next/link` to `/`).
  - Center: Desktop navigation menu links:
    - `Home`, `About Us`
    - `Services` (with clean hover dropdown showing all 5 services with icons)
    - `Our Work`, `Gallery`, `Blogs`, `Contact Us`
  - Right:
    - "Get Quote" Action Button (Pill button with WhatsApp green badge routing to `wa.me/919391014493`).
    - Mobile Hamburger button triggering `MobileDrawer`.
- **Props**: None (Static navigation data imported from `@/data/navigation`).

### 2.2 `MobileDrawer.tsx` (`"use client"`)
- **Role**: Accessible off-canvas slide-out menu for mobile and tablet screens (<1024px).
- **Features**:
  - Focus trap and ESC key listener for accessibility.
  - Collapsible sub-menu for `Services`.
  - Direct 1-tap quick action buttons: "Chat on WhatsApp" and "Call Sales (+91 93910 14493)".
  - Office address and social media icons in drawer footer.

### 2.3 `Footer.tsx`
- **Role**: 4-column master footer embedded across all pages.
- **Sub-components**:
  - `CompanyBioColumn`: Logo, company purpose statement, physical address in Uppal IDA, phone, email.
  - `ServicesLinksColumn`: Direct links to all 5 packaging services.
  - `QuickLinksColumn`: About Us, Our Work, Gallery, Blogs, Contact Us, Privacy Policy, Terms.
  - `NewsletterColumn`: "Subscribe to our newsletter" email form + verified social icons (Facebook, Instagram, YouTube, LinkedIn).
  - `InteractiveMap`: Responsive Google Maps embed pointing to the Ramanthapur/Uppal manufacturing unit.
  - `CopyrightBar`: Legal rights statement and current year auto-calculation.

### 2.4 `Breadcrumbs.tsx`
- **Role**: Semantic breadcrumb trail rendered on all secondary, service, and blog pages.
- **Features**:
  - Renders HTML `<nav aria-label="Breadcrumb">` with slash separators.
  - Injects Google-compliant `BreadcrumbList` JSON-LD schema into the page DOM.

### 2.5 `FloatingWhatsApp.tsx` (`"use client"`)
- **Role**: High-visibility conversion trigger pinned to the bottom-right viewport.
- **Features**:
  - Pulsing green button with WhatsApp icon and tooltip ("Instant Quote / Chat with us").
  - On click, opens `https://wa.me/919391014493?text=Hello%20I%20want%20to%20know%20more`.
  - Hides smoothly when user is interacting with the main contact form to avoid UI collision.

---

## 3. Reusable Marketing Section Components

### 3.1 `HeroSection.tsx`
- **Role**: High-impact flagship hero banner.
- **Variants**:
  - `HomeHero`: Includes headline ("Pouch Printing Without Cylinder"), subheadline, value badges ("Zero Plate Costs", "7-Day Delivery", "Low MOQ"), dual CTAs ("Get Instant Quote" + "Explore Capabilities"), and a media container with the WhatsApp machinery video or fallback poster image (`WhatsApp-Image-2025-11-_e0f3418d.jpeg`).
  - `PageHero`: Compact version for secondary pages with title, category badge, and breadcrumbs.

### 3.2 `FeaturesGrid.tsx` (Comparison: Traditional vs. Cylinder-Free)
- **Role**: Visual side-by-side comparison matrix educating clients on why cylinder-free printing saves money.
- **Structure**:
  - Column 1: Traditional Gravure Printing (High cylinder costs ₹50k–₹1L, 30+ days wait, massive 50,000+ unit MOQs, costly plate revisions).
  - Column 2: Kakatiya Digital Cylinder-Free Printing (₹0 cylinder charges, 7-10 day dispatch, low flexible MOQs, unlimited design changes).

### 3.3 `ServicesGrid.tsx` & `ServiceCard.tsx`
- **Role**: Displays all 5 core packaging capabilities in a responsive 3-column grid.
- **Card Contents**:
  - Service image mockup from `public/images/products/`.
  - Micro-badge (e.g., "Food Grade Certified", "360° Coverage").
  - H3 Service Title.
  - 2-line concise summary.
  - Bulleted specs (Material, Finishes, Core Applications).
  - Link button: "View Technical Specs & Finishes ->".

### 3.4 `PortfolioGrid.tsx` & `ImageLightboxModal.tsx` (`"use client"`)
- **Role**: Interactive portfolio and gallery showcase.
- **Features**:
  - Category pill filter: `All`, `Stand-Up Pouches`, `Roll Form Labels`, `Shrink Sleeves`, `Laminate Films`.
  - Grid of high-resolution product cards rendering the 12 Artboard renders and 17 WhatsApp packaging photographs.
  - Lightbox click handler: Expands image in high-DPI fullscreen modal with packaging details and a "Get a Similar Pouch" CTA button.

### 3.5 `FaqAccordion.tsx` (`"use client"`)
- **Role**: Accessible FAQ section resolving client questions.
- **Features**:
  - WAI-ARIA compliant accordion tabs (`aria-expanded`, `aria-controls`).
  - Smooth height transition animations.
  - Schema generator: Automatically renders `FAQPage` JSON-LD schema based on questions and answers.

### 3.6 `BottomCtaBanner.tsx`
- **Role**: Full-width high-conversion call-to-action block positioned above the footer.
- **Design**:
  - Deep corporate blue background with subtle gradient overlay.
  - Eye-catching headline: "Ready to Launch Your Custom Packaging Without Cylinder Costs?"
  - Subtitle: "Send your artwork today and receive a 3D digital mockup and custom quote within 2 hours."
  - Dual CTAs: WhatsApp Quote button (Green) and "Call Sales Desk" button (White).

### 3.7 `ContactForm.tsx` (`"use client"`)
- **Role**: Primary lead capture form.
- **Form Controls**:
  - Full Name (`name`, required, text)
  - Business Email (`email`, required, email validation)
  - Phone Number (`phone`, required, 10-digit Indian mobile validation)
  - Service Required (Dropdown: Pouch Printing, Roll Labels, Shrink Sleeves, Films, Other)
  - Project Details / Quantity (`message`, optional, textarea)
  - Submit Button with loading spinner ("Request Free Quote & Sample Kit")
- **Submission Flow**:
  - Validates client-side using **Zod**.
  - Sends payload to `/api/contact` serverless endpoint.
  - Upon success, displays success message with one-click shortcut: "Forward this inquiry directly to WhatsApp for priority response".

---

## 4. Design System Tokens & Tailwind Configuration

### 4.1 Color Palette
```javascript
// tailwind.config.ts brand colors
colors: {
  brand: {
    blue: {
      50: '#edf5ff',
      100: '#d0e2ff',
      500: '#0084e8',
      600: '#0062cc',
      700: '#003db3', // Primary Corporate Brand Blue
      800: '#002d80',
      900: '#001b4d',
    },
    green: {
      50: '#eefdf4',
      100: '#d6fae2',
      500: '#03e78b',
      600: '#5fbd74', // Primary Eco & Sustainability Green
      700: '#25D366', // Official WhatsApp Accent Green
      800: '#1b8a47',
    },
    slate: {
      800: '#1e242b',
      900: '#32373c', // Primary Dark Typography
    }
  }
}
```

### 4.2 Typography Hierarchy
- **Display Font**: `var(--font-outfit)`, sans-serif (Headings H1–H3, Hero headlines, Banner titles).
  - `H1`: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
  - `H2`: `text-3xl md:text-4xl font-bold tracking-tight text-brand-slate-900`
  - `H3`: `text-xl md:text-2xl font-semibold text-brand-blue-700`
- **Body Font**: `var(--font-inter)`, sans-serif (Paragraphs, specs, form labels, footer text).
  - Body Normal: `text-base text-gray-700 leading-relaxed`
  - Body Small: `text-sm text-gray-500`

### 4.3 UI Component Styling Standards
- **Buttons (`Button.tsx`)**:
  - Primary: `bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-medium rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-all`
  - WhatsApp: `bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-lg px-6 py-3 shadow-md hover:shadow-lg flex items-center gap-2 transition-all`
  - Outline: `border-2 border-brand-blue-700 text-brand-blue-700 hover:bg-brand-blue-50 font-medium rounded-lg px-6 py-3 transition-all`
- **Cards (`Card.tsx`)**:
  - `bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6`
- **Pill Badges (`Badge.tsx`)**:
  - `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100`
