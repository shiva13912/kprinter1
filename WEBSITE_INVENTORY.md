# WEBSITE INVENTORY

**Project**: Kakatiya Printers Website Migration Analysis  
**Reference Directory**: `reference/`  
**Date of Analysis**: November 15, 2026  
**Auditor**: Senior Website Migration Architect & Content Analyst  

---

## 1. Executive Summary & File System Totals

The `reference/` folder contains a comprehensive crawl snapshot of **kakatiyaprinters.com**.

### File Format Breakdown
| File Type | Extension | Count | Total Size (Bytes) | Human-Readable Size | Description |
|-----------|-----------|-------|--------------------|---------------------|-------------|
| HTML Webpages | `.html` | 15 | 2,382,981 bytes | ~2.27 MB | 14 valid HTML pages + 1 binary file misnamed as HTML |
| JPEG Images | `.jpeg` | 18 | 1,850,571 bytes | ~1.76 MB | Product samples & WhatsApp showcase photos |
| JPG Images | `.jpg` | 20 | 8,664,239 bytes | ~8.26 MB | High-res Artboard renders, machinery, blog covers |
| PNG Images | `.png` | 8 | 3,984,928 bytes | ~3.80 MB | Brand logos, banners, transparent mockups, Flaticon icon |
| WebP Images | `.webp` | 1 | 102,294 bytes | ~99.9 KB | Company building / facility photo |
| Data (JSON) | `.json` | 1 | 4,857 bytes | ~4.74 KB | Crawler output metadata (`crawl_results.json`) |
| Data (CSV) | `.csv` | 1 | 2,500 bytes | ~2.44 KB | Crawler output spreadsheet (`crawl_results.csv`) |
| **Total** | | **64** | **16,992,370 bytes** | **~16.20 MB** | Complete reference archive |

---

## 2. Directory Structure

```
reference/
├── data/
│   ├── crawl_results.csv        # 15 records tabular summary
│   └── crawl_results.json       # 15 records structured crawler output
├── images/                      # 47 downloaded image assets (14.02 MB)
│   ├── 512_159_159604_png_b57c7dc6.png
│   ├── wp-content_uploads_2023_01_33_jpg_f4f014f9.jpg
│   ├── wp-content_uploads_2025_09_Color-Logo_png_0a5c90da.png
│   ├── wp-content_uploads_2025_09_Kakatiya-Logo-RGB-1024x_41a949de.png
│   ├── wp-content_uploads_2025_09_Kakatiya-Logo-RGB_png_c580851d.png
│   ├── wp-content_uploads_2025_11_Artboard-[1-12]-scaled_jpg_*.jpg (12 files)
│   ├── wp-content_uploads_2025_11_Bottom-Banner_png_44a32eae.png
│   ├── wp-content_uploads_2025_11_Untitled-design-34-e176_af75178c.png
│   ├── wp-content_uploads_2025_11_Untitled-design-81_jpg_5fe82752.jpg
│   ├── wp-content_uploads_2025_11_WhatsApp-Image-2025-11-_*.jpeg (17 files)
│   ├── wp-content_uploads_2025_11_building_webp_adaaa444.webp
│   ├── wp-content_uploads_2025_11_wmremove-transformed*.png (2 files)
│   ├── wp-content_uploads_2025_12_Kakatiya-Printers-pouch_91903e9b.jpg
│   ├── wp-content_uploads_2025_12_pouch-printing-without-_ccfa7cf1.jpg
│   ├── wp-content_uploads_2026_01_pouch-printing-without-*.jpg (2 files)
│   └── wp-content_uploads_2026_02_*.jpg/.jpeg (3 files)
└── pages/                       # 15 HTML files (2.27 MB)
    ├── about-us_094b431c.html
    ├── best-printing-company-in-hyderabad-for-pouch-print_c8f625d5.html
    ├── blogs_311b6d31.html
    ├── contact-us_0427d648.html
    ├── film-printing-services_ab7413b3.html
    ├── gallery_dbac3295.html    # [CRITICAL ANOMALY: Binary JFIF JPEG file]
    ├── how-shrink-sleeve-labels-boost-product-visibility-_680e0caf.html
    ├── how-to-reduce-packaging-costs-without-compromising_766ab7f6.html
    ├── index_3532d3ac.html      # Homepage duplicate variant (non-trailing slash)
    ├── index_6601cff9.html      # Homepage primary crawl (trailing slash)
    ├── our-work_ea0351ee.html
    ├── pouch-printing-without-cylinder-why-it-matters-for_59321074.html
    ├── pouch-printing-without-cylinder_547c2633.html
    ├── roll-form-label-printing_63e9eb70.html
    └── shrink-sleeves-printing_75b179b1.html
```

---

## 3. Webpage Inventory & Hash Verification

| File Name | Original Crawled URL | Canonical URL | Page Title | File Size | MD5 Hash | Status / Type |
|-----------|----------------------|---------------|------------|-----------|----------|---------------|
| `index_6601cff9.html` | `https://kakatiyaprinters.com/` | `https://kakatiyaprinters.com/` | Pouch Printing Without Cylinder - Kakatiya Printers | 213,630 B | `33e54b6fed22257c19b47bb2ebe62241` | Primary Homepage |
| `index_3532d3ac.html` | `https://kakatiyaprinters.com` | `https://kakatiyaprinters.com/` | Pouch Printing Without Cylinder - Kakatiya Printers | 213,630 B | `6838b85c3162c43c26caa79b6ea4b9d4` | Duplicate Homepage (differs only by 1 CSS query string) |
| `about-us_094b431c.html` | `https://kakatiyaprinters.com/about-us` | `https://kakatiyaprinters.com/about-us/` | About Kakatiya Printers \| Professional Printing Company in India | 169,730 B | `11d7e268a73fe4d2df414ce5a07c33b0` | About Page |
| `our-work_ea0351ee.html` | `https://kakatiyaprinters.com/our-work` | `https://kakatiyaprinters.com/our-work/` | Our Work \| Pouch & Label Printing Services by Kakatiya Printers | 137,869 B | `9be8723223ea4d5fc8d7df33230626b9` | Portfolio / Showcase |
| `pouch-printing-without-cylinder_547c2633.html` | `https://kakatiyaprinters.com/pouch-printing-without-cylinder` | `https://kakatiyaprinters.com/pouch-printing-without-cylinder/` | Pouch Printing Without Cylinders \| Zipper Pouches | 200,942 B | `00155b4109fae48600d8bc3da62d04bb` | Service Page (Pouch) |
| `roll-form-label-printing_63e9eb70.html` | `https://kakatiyaprinters.com/roll-form-label-printing` | `https://kakatiyaprinters.com/roll-form-label-printing/` | Roll Form Label Printing \| Customized Roll Form Labels | 205,372 B | `fe33bc0b7849641e7d0f97746571a067` | Service Page (Roll Labels) |
| `shrink-sleeves-printing_75b179b1.html` | `https://kakatiyaprinters.com/shrink-sleeves-printing` | `https://kakatiyaprinters.com/shrink-sleeves-printing/` | Shrink Sleeves Printing \| Custom Shrink Sleeve Labels | 205,066 B | `a9cbfd43c21a4ae07d0f50875ea48937` | Service Page (Shrink Sleeves) |
| `film-printing-services_ab7413b3.html` | `https://kakatiyaprinters.com/film-printing-services` | `https://kakatiyaprinters.com/film-printing-services/` | Film Printing Services \| Custom Flexible Packaging Films India | 208,011 B | `c484f046ae452fcf26484d852a326083` | Service Page (Film) |
| `blogs_311b6d31.html` | `https://kakatiyaprinters.com/blogs` | `https://kakatiyaprinters.com/blogs/` | Blogs - Kakatiya Printers | 158,187 B | `f0cb8c0a91176b63309a4d8c639b5b29` | Blog Directory Index |
| `contact-us_0427d648.html` | `https://kakatiyaprinters.com/contact-us` | `https://kakatiyaprinters.com/contact-us/` | Contact Kakatiya Printers \| Printing Partner in India | 163,222 B | `f8e32906ec14389f41753c15383a5ae7` | Contact Page |
| `gallery_dbac3295.html` | `https://kakatiyaprinters.com/gallery` | N/A | No Title | 8,290 B | `0ddca91fbba137083a216f40608be9c3` | **CRITICAL**: Binary JFIF image saved as .html |
| `best-printing-company-in-hyderabad-for-pouch-print_c8f625d5.html` | `https://kakatiyaprinters.com/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder` | `https://kakatiyaprinters.com/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder/` | Best Printing Company in Hyderabad for Pouch Printing Without Cylinder | 126,989 B | `f599ce5b801452c93d94ee9c1ef3cb02` | Blog Post 1 |
| `how-to-reduce-packaging-costs-without-compromising_766ab7f6.html` | `https://kakatiyaprinters.com/how-to-reduce-packaging-costs-without-compromising-quality` | `https://kakatiyaprinters.com/how-to-reduce-packaging-costs-without-compromising-quality/` | How to Reduce Packaging Costs Without Compromising Quality | 134,809 B | `9a752671cf0e6fe19416a9a7a6ce20f8` | Blog Post 2 |
| `how-shrink-sleeve-labels-boost-product-visibility-_680e0caf.html` | `https://kakatiyaprinters.com/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity` | `https://kakatiyaprinters.com/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity/` | How Shrink Sleeve Labels Boost Product Visibility & Brand Identity | 119,773 B | `c234a974b78ae6ebaa75da53cb6e03ea` | Blog Post 3 |
| `pouch-printing-without-cylinder-why-it-matters-for_59321074.html` | `https://kakatiyaprinters.com/pouch-printing-without-cylinder-why-it-matters-for-small-businesses` | `https://kakatiyaprinters.com/pouch-printing-without-cylinder-why-it-matters-for-small-businesses/` | Pouch Printing Without Cylinder for small business | 125,487 B | `8390632a688439df689bb46ff2e057ba` | Blog Post 4 |

---

## 4. Duplicate & Near-Duplicate Analysis

### `index_6601cff9.html` vs `index_3532d3ac.html`
- **Byte Size**: Exactly 213,630 bytes each.
- **Line Count**: Exactly 523 lines each.
- **Diff Analysis**: Exactly 1 line differs:
  ```html
  Line 90 in index_6601cff9.html:
  <link rel='stylesheet' id='magnific-popup-css' href='https://kakatiyaprinters.com/wp-content/plugins/elementskit-lite/assets/libs/magnific-popup/magnific-popup.css?ver=1794726104' media='all' />

  Line 90 in index_3532d3ac.html:
  <link rel='stylesheet' id='magnific-popup-css' href='https://kakatiyaprinters.com/wp-content/plugins/elementskit-lite/assets/libs/magnific-popup/magnific-popup.css?ver=1794726112' media='all' />
  ```
- **Conclusion**: `index_3532d3ac.html` is an artifact of crawling both `https://kakatiyaprinters.com` (no trailing slash) and `https://kakatiyaprinters.com/` (trailing slash). Only `index_6601cff9.html` represents the canonical homepage.

---

## 5. Critical Inconsistencies & Anomaly Flagging

1. **Corrupted / Misidentified Gallery File**:
   - `pages/gallery_dbac3295.html` is an 8,290-byte file that begins with binary JFIF marker `\xef\xbf\xbd\xef\xbf\xbd\xef\xbf\xbd\xef\xbf\xbd\x00\x10JFIF`.
   - The crawler requested `https://kakatiyaprinters.com/gallery` and saved an image as `.html`. The text decoder replaced binary bytes with UTF-8 replacement characters `\ufffd`, rendering it unviewable as an image and completely devoid of HTML markup.
   - The actual HTML structure and media for `/gallery` is absent from the crawl.

2. **Crawl Scope vs Linked URLs Discrepancy**:
   - The crawler discovered 15 pages.
   - However, internal hyperlinks throughout the site point to additional URLs that were never saved:
     - `https://kakatiyaprinters.com/flat-bottom-pouches/` (linked in `film-printing-services` and `shrink-sleeves-printing`)
     - `https://kakatiyaprinters.com/services` (linked in the footer "Quick Links")
     - `https://kakatiyaprinters.com/about` (footer link differs from canonical `/about-us/`)
