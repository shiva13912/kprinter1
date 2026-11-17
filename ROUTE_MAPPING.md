# ROUTE MAPPING & URL REDIRECTION SPECIFICATION

**Project**: Kakatiya Printers Website Modernization & Migration  
**Framework**: Next.js App Router  
**Author**: Senior Website Migration Architect & Content Analyst  
**Date**: November 15, 2026  

---

## 1. URL Strategy & SEO Preservation Principles

During migration from WordPress to Next.js, preserving existing search engine ranking authority (link equity and backlinks) is paramount.

### Core Routing Principles:
1. **Canonical Clean URLs**: Next.js will serve modern semantic URLs without trailing slashes (e.g., `/services/pouch-printing-without-cylinder`).
2. **Permanent 301 Redirects**: Any request to a legacy WordPress URL containing a trailing slash or root permalink will be 301-redirected permanently to the canonical route.
3. **Dual URL Strategy for High-Authority Pages**:
   - The original website served service pages directly at the root (e.g., `/pouch-printing-without-cylinder/`).
   - The modern architecture organizes them logically under `/services/pouch-printing-without-cylinder`.
   - **Crucial Rule**: A permanent 301 redirect will be mapped from the legacy root path directly to the structured `/services/*` path, or aliased so both resolve gracefully without any 404s.
4. **Normalized Trailing Slash Policy**: Trailing slashes will be automatically stripped via Next.js standard config (`trailingSlash: false`).

---

## 2. Exhaustive Legacy-to-Modern Route Mapping Table

| # | Legacy WordPress URL | Saved Reference File | New Canonical Next.js Route | HTTP Status / Migration Action | Content / Migration Notes |
|---|----------------------|----------------------|-----------------------------|--------------------------------|---------------------------|
| 1 | `https://kakatiyaprinters.com/` | `index_6601cff9.html` | `/` | 200 OK (Direct Serve) | Canonical homepage |
| 2 | `https://kakatiyaprinters.com` | `index_3532d3ac.html` | `/` | 301 Permanent Redirect -> `/` | Duplicate crawl variant (no trailing slash) |
| 3 | `/about-us/` or `/about-us` | `about-us_094b431c.html` | `/about-us` | 200 OK (Direct Serve) | Core company page |
| 4 | `/about` | *(Discovered in footer)* | `/about-us` | 301 Permanent Redirect -> `/about-us` | Corrects legacy footer typo/inconsistency |
| 5 | `/our-work/` or `/our-work` | `our-work_ea0351ee.html` | `/our-work` | 200 OK (Direct Serve) | Portfolio & showcase page |
| 6 | `/gallery/` or `/gallery` | `gallery_dbac3295.html` *(Corrupted)* | `/gallery` | 200 OK (Reconstructed) | Replaced with modern interactive visual gallery built from master assets |
| 7 | `/contact-us/` or `/contact-us` | `contact-us_0427d648.html` | `/contact-us` | 200 OK (Direct Serve) | Main contact & quote inquiry page |
| 8 | `/services/` or `/services` | *(Discovered in footer)* | `/services` | 200 OK (New Hub Page) | Resolves dead link; creates comprehensive services directory |
| 9 | `/pouch-printing-without-cylinder/` | `pouch-printing-without-cylinder_547c2633.html` | `/services/pouch-printing-without-cylinder` | 301 Redirect (Legacy) -> 200 OK (New Route) | Flagship service page |
| 10 | `/roll-form-label-printing/` | `roll-form-label-printing_63e9eb70.html` | `/services/roll-form-label-printing` | 301 Redirect (Legacy) -> 200 OK (New Route) | Core service page |
| 11 | `/shrink-sleeves-printing/` | `shrink-sleeves-printing_75b179b1.html` | `/services/shrink-sleeves-printing` | 301 Redirect (Legacy) -> 200 OK (New Route) | Core service page |
| 12 | `/film-printing-services/` | `film-printing-services_ab7413b3.html` | `/services/film-printing-services` | 301 Redirect (Legacy) -> 200 OK (New Route) | Core service page |
| 13 | `/flat-bottom-pouches/` | *(Dangling link in blogs & film)* | `/services/flat-bottom-pouches` | 301 Redirect (Legacy) -> 200 OK (New Route) | Formalized as dedicated high-value product page |
| 14 | `/blogs/` or `/blogs` | `blogs_311b6d31.html` | `/blogs` | 200 OK (Direct Serve) | Main blog & resource directory |
| 15 | `/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder/` | `best-printing-company-in-hyderabad-for-pouch-print_c8f625d5.html` | `/blogs/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder` | 301 Redirect (Legacy) -> 200 OK (New Route) | Educational Blog Article 1 |
| 16 | `/how-to-reduce-packaging-costs-without-compromising-quality/` | `how-to-reduce-packaging-costs-without-compromising_766ab7f6.html` | `/blogs/how-to-reduce-packaging-costs-without-compromising-quality` | 301 Redirect (Legacy) -> 200 OK (New Route) | Educational Blog Article 2 |
| 17 | `/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity/` | `how-shrink-sleeve-labels-boost-product-visibility-_680e0caf.html` | `/blogs/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity` | 301 Redirect (Legacy) -> 200 OK (New Route) | Educational Blog Article 3 |
| 18 | `/pouch-printing-without-cylinder-why-it-matters-for-small-businesses/` | `pouch-printing-without-cylinder-why-it-matters-for_59321074.html` | `/blogs/pouch-printing-without-cylinder-why-it-matters-for-small-businesses` | 301 Redirect (Legacy) -> 200 OK (New Route) | Educational Blog Article 4 |
| 19 | *(None - New Requirement)* | N/A | `/privacy-policy` | 200 OK (New Page) | Compliance & data privacy terms |
| 20 | *(None - New Requirement)* | N/A | `/terms-of-service` | 200 OK (New Page) | Custom order conditions & delivery terms |

---

## 3. Implementation Specification (`next.config.mjs`)

Below is the verified redirection configuration to be implemented in `next.config.mjs`. It provides absolute safety against 404 errors for legacy incoming traffic from Google search results, bookmarks, or social media shares.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // 1. Normalize legacy /about to /about-us
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      
      // 2. Services Legacy Root Permalinks -> Structured /services/*
      {
        source: '/pouch-printing-without-cylinder',
        destination: '/services/pouch-printing-without-cylinder',
        permanent: true,
      },
      {
        source: '/roll-form-label-printing',
        destination: '/services/roll-form-label-printing',
        permanent: true,
      },
      {
        source: '/shrink-sleeves-printing',
        destination: '/services/shrink-sleeves-printing',
        permanent: true,
      },
      {
        source: '/film-printing-services',
        destination: '/services/film-printing-services',
        permanent: true,
      },
      {
        source: '/flat-bottom-pouches',
        destination: '/services/flat-bottom-pouches',
        permanent: true,
      },

      // 3. Blog Articles Legacy Root Permalinks -> Structured /blogs/*
      {
        source: '/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder',
        destination: '/blogs/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder',
        permanent: true,
      },
      {
        source: '/how-to-reduce-packaging-costs-without-compromising-quality',
        destination: '/blogs/how-to-reduce-packaging-costs-without-compromising-quality',
        permanent: true,
      },
      {
        source: '/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity',
        destination: '/blogs/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity',
        permanent: true,
      },
      {
        source: '/pouch-printing-without-cylinder-why-it-matters-for-small-businesses',
        destination: '/blogs/pouch-printing-without-cylinder-why-it-matters-for-small-businesses',
        permanent: true,
      },

      // 4. Common WordPress System URLs -> Clean Safe Fallbacks
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: false,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
```

---

## 4. Query String, Trailing Slash, and Canonical URL Policy

- **Canonical URL Enforcement**: Each page will explicitly set its canonical URL via Next.js metadata `metadata.alternates.canonical`, stripping all tracking parameters (`utm_source`, `utm_medium`, `fbclid`, `gclid`).
- **Trailing Slash Normalization**: Next.js automatically responds with a `308 Permanent Redirect` when a user or crawler visits a path with a trailing slash (e.g. `/about-us/` -> `/about-us`).
- **Protocol & Hostname Enforcement**: All requests will resolve strictly to `https://kakatiyaprinters.com`. Non-www to www or http to https transitions are handled at the CDN/DNS edge (Cloudflare/Vercel).
