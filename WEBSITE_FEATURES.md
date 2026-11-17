# WEBSITE FEATURES & TECHNICAL SPECIFICATION

**Project**: Kakatiya Printers Website Migration Analysis  
**Auditor**: Senior Website Migration Architect & Content Analyst  
**Date**: November 15, 2026  

---

## 1. Original Website Architecture & Technology Stack

Based on in-depth inspection of the HTML markup, DOM structure, script tags, stylesheets, and meta elements, the original website runs on the following stack:

| Component | Technology / Library | Version / Detail |
|-----------|----------------------|------------------|
| **Core CMS** | WordPress | Self-hosted WordPress 6.x |
| **Theme** | Prinox | Premium Industrial & Printing Company Theme |
| **Page Builder** | Elementor Pro + ElementsKit Lite | Visual drag-and-drop page builder |
| **E-Commerce Engine** | WooCommerce | Installed with Variation Swatches and Smart Quick View (configured as B2B product showcase rather than consumer cart checkout) |
| **Slider Engine** | Revolution Slider (RevSlider) | v6.7.37 (`sr7.js`, `tptools.js`) |
| **Form Engine** | Contact Form 7 + Elementor Forms | Native WordPress AJAX form submission |
| **Modal / Lightbox** | Magnific Popup & Slick Carousel | Interactive product image zooms and client carousels |
| **Tag Management** | Google Tag Manager | Container ID: `GTM-W9C6XQND` |
| **Web Analytics** | Google Analytics 4 (GA4) | Measurement ID: `G-C5XGGYHJZH` |

---

## 2. Lead Generation & Conversion Mechanisms

Rather than traditional e-commerce transactions (add to cart -> credit card checkout), the website is engineered strictly as a **high-touch B2B lead generation engine**. Custom packaging specifications vary widely by pouch dimensions, material barrier laminates, thickness (microns), zipper styles, and print quantities.

### 2.1 WhatsApp Click-to-Chat (Primary Conversion Channel)
- **Implementation**: Ubiquitous header buttons, floating action buttons, and in-content CTAs.
- **Deep Link Schema**:
  - `https://wa.me/919391014493?text=Hello%20I%20want%20to%20know%20more`
  - Direct routing to customer sales team at `+91 93910 14493`.
- **User Intent**: Enables prospective buyers to immediately share design files (AI, PDF, CDR) and receive instant custom estimates.

### 2.2 Inquiry & Quote Request Forms (Secondary Channel)
- **Locations**: Present on `contact-us`, `about-us`, and embedded across service pages.
- **Fields Collected**:
  1. Full Name (`form_fields[name]`)
  2. Email Address (`form_fields[email]`)
  3. Contact Phone Number (`form_fields[field_6b670a2]`)
  4. Packaging Requirements / Message (`form_fields[message]`)
- **Backend Flow**: Form data submitted asynchronously to WordPress admin email dispatch.

### 2.3 Newsletter Capture (Tertiary Channel)
- **Location**: Global footer Column 4.
- **Field**: Email capture (`form_fields[email]`).
- **Intent**: Lead nurturing and ongoing updates on packaging innovations.

---

## 3. Interactive UI Components & Widgets

1. **Hero Background Video Player**:
   - Autoplay, looped, muted, inline video banner on the homepage showcasing high-speed printing presses and pouch manufacturing machinery.
   - Includes fallback poster image (`wp-content_uploads_2025_11_WhatsApp-Image-2025-11-_e0f3418d.jpeg`).
2. **Expandable Accordion FAQ Panels**:
   - Integrated on service pages (`pouch-printing`, `roll-form-labels`, `shrink-sleeves`, `film-printing`).
   - Built with ElementsKit accordion tabs to display category breakdowns (Food & Beverage, Cosmetics, Pet Food, Pharma) and technical packaging FAQs without cluttering the page.
3. **Responsive Google Maps Integration**:
   - Dynamic map iframe positioned in the footer and Contact Us page pointing to:
     `I.D.A, Uppal, Laxmi Narayan Nagar Colony, Ramanthapur, Hyderabad, Telangana 500039`.
4. **Artboard Showcase Grid**:
   - High-resolution 2560x2560 product render gallery on `index` and `our-work` with 12 distinct pouch and label mockups.
5. **Mobile Navigation Drawer**:
   - Hamburger navigation menu with off-canvas slide-out on tablet and mobile viewports.

---

## 4. Visual Design System & Brand Palette

### Color Palette
- **Primary Industrial Blue**: `#003DB3` / `#0084E8` / `#3C7FFF` (Symbolizes precision, technical reliability, and B2B corporate authority).
- **Secondary Vibrant Green**: `#5FBD74` / `#00D084` / `#03E78B` (Reflects eco-friendly inks, sustainability, and WhatsApp action buttons).
- **Dark Slate / Text Neutral**: `#32373C` (Body typography and high-contrast readable paragraphs).
- **Clean White / Pure Neutral**: `#FFFFFF` (Card backgrounds, clean spacing, section division).

### Typography System
- **Headings**: Modern geometric and humanist sans-serifs (`Outfit`, `Montserrat`, `Poppins`) in weights 600-800 for prominent headings.
- **Body Text**: Highly legible neutral sans-serifs (`Inter`, `Open Sans`, `Roboto`) in weights 400-500.
- **Iconography**: FontAwesome icons (phone, envelope, map pin, checkmarks, social icons).

---

## 5. Technical Recommendations for Modernization

The original site suffers from typical WordPress bloat: **110 external CSS files**, **70 external JS files**, and heavy dependencies on jQuery and Elementor runtimes, resulting in excessive HTTP requests and slower load times.

### Target Modern Architecture
1. **Framework**: Modern component-based static/server framework (e.g., **Next.js 14+ / React** or **Vite + React**).
2. **Styling**: **Tailwind CSS** to replace all 110 legacy CSS files with a single lightweight, purged, zero-runtime utility stylesheet.
3. **Asset Optimization**:
   - Convert all master JPG/PNG images to modern **WebP** and **AVIF** formats with responsive `<picture>` tags.
   - Self-host Google Fonts (`Outfit` and `Inter`) via `@fontsource` to eliminate external Google Fonts roundtrips.
   - Replace FontAwesome webfont files with inline tree-shaken SVG icons (e.g. `lucide-react`).
4. **Form Handling**:
   - Replace legacy Elementor form AJAX with modern serverless handlers (e.g. Next.js Server Actions, Resend / Nodemailer API, or Web3Forms) with client-side validation and immediate WhatsApp follow-up redirect.
5. **SEO & Performance**:
   - Semantic HTML5 structure (proper `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
   - Unified OpenGraph, JSON-LD Schema (LocalBusiness & IndustrialService schema for Hyderabad plant), and canonical URLs.
