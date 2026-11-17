# NAVIGATION STRUCTURE

**Project**: Kakatiya Printers Website Migration Analysis  
**Auditor**: Senior Website Migration Architect & Content Analyst  
**Date**: November 15, 2026  

---

## 1. Global Header Navigation

The primary navigation menu is uniformly embedded across all webpages via an Elementor header template.

### Desktop Menu Hierarchy
```
[Brand Logo: Kakatiya Printers] -> https://kakatiyaprinters.com/
│
├── Home ─────────────────────────> / (https://kakatiyaprinters.com/)
├── About Us ─────────────────────> /about-us/
├── Our Work ─────────────────────> /our-work/
├── Services [Flat / Multi-link in Nav]:
│   ├── Pouch Printing Without Cylinder ──> /pouch-printing-without-cylinder/
│   ├── Roll Form Label Printing ─────────> /roll-form-label-printing/
│   ├── Shrink Sleeves Printing ──────────> /shrink-sleeves-printing/
│   └── Film Printing Service ────────────> /film-printing-services/
├── Blogs ────────────────────────> /blogs/
└── Contact Us ───────────────────> /contact-us/
│
└── [Header CTA Button]: "Get Quote"
    └── Destination: https://wa.me/919391014493?text=Hello%20I%20want%20to%20know%20more
```

### Mobile Header Navigation
- **Trigger**: Hamburger icon button (`.elementor-menu-toggle`).
- **Drawer Behavior**: Full-width off-canvas / slide-down menu displaying the identical hierarchy as desktop.
- **Top Utility Bar**: Direct tap-to-call / WhatsApp trigger button.

---

## 2. Global Footer Navigation

The footer is structured as a 4-column widget area followed by an embedded interactive map and legal strip.

### Column 1: Company Profile & Physical Contact
- **Brand Statement**: "We specialize in high-quality custom printing, helping brands bring their ideas to life effortlessly."
- **Office Address**:
  ```
  I.D.A, Uppal, Laxmi Narayan Nagar Colony, 
  Ramanthapur, Hyderabad, Telangana 500039, India
  ```
- **Phone**: `+91 93910 14493` (Direct WhatsApp and voice call)
- **Email**: `info@kakatiyaprinters.com`

### Column 2: Social Media Channels
| Platform | Link Label | Target URL | Verification Status |
|----------|------------|------------|---------------------|
| Facebook | Facebook | `https://www.facebook.com/kakatiyaprinters` | Verified Active URL |
| Instagram | Instagram | `https://www.instagram.com/_kakatiyaprinters_/` | Verified Active URL |
| YouTube | Youtube | *(Empty string `href=""`)* | **BROKEN / INCOMPLETE**: URL missing in source |

### Column 3: Quick Links
| Label | Target Href in Source | Canonical Resolution | Analysis / Notes |
|-------|----------------------|-----------------------|------------------|
| About us | `/about` | `/about-us/` | **INCONSISTENCY**: Points to `/about` instead of `/about-us/` (requires 301 redirect or correction) |
| Services | `/services` | Missing | **BROKEN**: No general `/services` overview page exists in the crawl |
| Gallery | `/gallery` | Missing / Image | **DEFECT**: Linked URL returned an image file rather than an HTML gallery page |
| Contact | `/contact-us` | `/contact-us/` | Verified Active URL |

### Column 4: Newsletter Subscription
- **Heading**: "Newsletter"
- **Instructional Copy**: "Subscribe to the newsletter: Let’s stay in touch!"
- **Input Control**: Text field (Placeholder: "Email", Name: `form_fields[email]`)
- **Submit Control**: Button labeled "Send"

### Bottom Footer Strip
- **Full-Width Interactive Map**: Google Maps embed highlighting IDA Uppal manufacturing unit.
- **Copyright Notice**: Standard copyright text and WordPress theme credit.

---

## 3. Internal In-Page & Cross-Linking Web

### 3.1 Blog to Service Deep Links
The 4 educational articles act as organic entry points that cross-link directly into service and lead-generation pages:
- In `pouch-printing-without-cylinder-why-it-matters-for-small-businesses`:
  - Deep-links to `/pouch-printing-without-cylinder/`
  - WhatsApp CTA embedded at end of article
- In `how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity`:
  - Deep-links to `/shrink-sleeves-printing/`
  - Deep-links to `/flat-bottom-pouches/` (**BROKEN REFERENCE: page missing**)
- In `film-printing-services`:
  - Deep-links to `/flat-bottom-pouches/` (**BROKEN REFERENCE: page missing**)
- In `best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder`:
  - Deep-links to `/contact-us/` and `/our-work/`

### 3.2 Conversion CTA Routing
Across every webpage, all high-intent buttons bypass traditional checkout in favor of WhatsApp:
- Pattern 1: `https://wa.me/919391014493?text=Hello%20I%20want%20to%20know%20more`
- Pattern 2: `https://wa.me/+91%2093910%2014493`
- Pattern 3: `https://wa.me/919391014493`

### 3.3 Accordion Internal Fragment Identifiers
On service pages (`pouch-printing`, `roll-form-labels`, `shrink-sleeves`, `film-printing`), internal bookmark anchors (e.g. `#collapse-066dd88...`) toggle FAQ accordion panes via JavaScript.
