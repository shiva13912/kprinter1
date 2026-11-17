# MISSING CONTENT & DEFECT ANALYSIS

**Project**: Kakatiya Printers Website Migration Analysis  
**Auditor**: Senior Website Migration Architect & Content Analyst  
**Date**: November 15, 2026  

---

## 1. Missing Media & Offline Assets

### 1.1 Homepage Hero Video File
- **Source Reference**: `<video class="elementor-video" src="https://kakatiyaprinters.com/wp-content/uploads/2025/11/WhatsApp-Video-2025-11-27-at-12.49.26.mp4">`
- **Location**: Hero header of `index_6601cff9.html` and `index_3532d3ac.html`.
- **Status in Reference**: **ABSENT**. The `reference/` folder contains only images, HTML, and data. Zero `.mp4` or video files were downloaded.
- **Migration Impact**: The hero video cannot play offline or in a migrated build without either downloading the original file from the live server or replacing it with an optimized self-hosted video/hero image.
- **Fall-back Asset Available**: A high-resolution poster image `wp-content_uploads_2025_11_WhatsApp-Image-2025-11-_e0f3418d.jpeg` is present in `reference/images/`.

### 1.2 Stylesheets, Scripts, and Web Fonts
- **External CSS**: 110 stylesheet references point to `kakatiyaprinters.com/wp-content/...` or CDN URLs. None are stored in `reference/`.
- **External JS**: 70 script references point to remote WordPress plugin bundles. None are stored in `reference/`.
- **Fonts**: 12 external Google Fonts links (`Outfit`, `Poppins`, `Inter`, etc.) and FontAwesome icon woff2 files are unbundled.

---

## 2. Defective, Corrupted, & Misidentified Webpages

### 2.1 The `/gallery` Page (`gallery_dbac3295.html`)
- **Severity**: **HIGH DEFECT**
- **Description**: The file `pages/gallery_dbac3295.html` is an 8,290-byte file that contains binary JPEG image data (JFIF header) decoded as UTF-8 text with replacement characters (`\xef\xbf\xbd`).
- **Cause**: The crawler encountered an image or an image redirect at `https://kakatiyaprinters.com/gallery` and saved it to the `pages/` directory with a `.html` extension as plain text.
- **Consequence**:
  1. The file is corrupt and unusable both as an HTML document and as an image file.
  2. The actual HTML gallery page (grid layout, category filter, client photos) was never captured.
- **Action Required**: The client must provide the original gallery images or clarify whether `/gallery` was an active page or a temporary image link.

---

## 3. Broken Hyperlinks & Uncrawled Pages

| Discovered Link URL | Referenced In | Defect Type | Impact & Remediation |
|---------------------|---------------|-------------|----------------------|
| `https://kakatiyaprinters.com/flat-bottom-pouches/` | `film-printing-services`, `shrink-sleeves-printing` | Missing Page / 404 Candidate | The text links to this dedicated product page, but the page was never captured in the crawl. Either create this page with relevant copy or redirect it to `/pouch-printing-without-cylinder/`. |
| `/services` | Footer Quick Links on all pages | Uncrawled / Missing Overview | Footer has a generic "Services" link, but there is no aggregate services landing page. Create a unified Services directory or route to `#services`. |
| `/about` | Footer Quick Links on all pages | Routing Inconsistency | Footer links to `/about`, whereas canonical about page is `/about-us/`. Must be normalized to `/about-us/` to prevent unnecessary redirects or 404 errors. |
| `href=""` (YouTube icon) | Footer on all pages | Incomplete Attribute | The YouTube icon in the footer has an empty destination attribute. Needs client's YouTube channel URL. |
| Button `Click here` / `href="#"` | Header & mobile toggles | Inert Anchor | Several anchor tags have empty `#` hrefs with no JavaScript fallback. |

---

## 4. Missing Corporate, Legal, & Operational Content

The following critical business information is missing from the existing website content and must be confirmed with the client:

1. **Legal & Registration Details**:
   - Company Legal Entity Name (Proprietorship, LLP, or Pvt Ltd).
   - GSTIN (GST Identification Number) — essential for B2B industrial printing credibility in India.
   - MSME / Udyam Registration number.
2. **Business Operations**:
   - Factory Working Hours (e.g. Monday - Saturday, 9:00 AM - 7:00 PM IST).
   - Customer Service / Dispatch Window.
3. **Key Personnel & Leadership**:
   - Founder / Managing Director profile.
   - Company history / establishment year (the About page has an "Our Story" section, but omits key milestones and founding date).
4. **Compliance & Legal Pages**:
   - Privacy Policy (Required for Google Analytics 4, Tag Manager, and lead capture forms).
   - Terms & Conditions.
   - Cancellation, Return & Quality Dispute Policy for custom packaging.
5. **Exact Commercial Parameters**:
   - The website frequently advertises "Low MOQ" and "Fastest Turnaround" without stating minimum quantities (e.g. 500 vs 2,000 units) or precise manufacturing schedules (e.g. 5-7 days vs 10-14 days).
