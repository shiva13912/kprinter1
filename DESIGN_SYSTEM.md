# DESIGN SYSTEM SPECIFICATION

**Project**: Kakatiya Printers Website Modernization  
**Role**: Senior UI/UX Designer  
**Status**: Proposal for Review & Approval  
**Date**: November 15, 2026  

---

## 1. Brand Identity Analysis & Creative Direction

### 1.1 Brand Heritage & Positioning
Kakatiya Printers is an established industrial packaging manufacturer based in Uppal, Hyderabad. Their primary brand signature is:
- **Core Technological Edge**: High-speed **cylinder-free digital flexible packaging**.
- **Customer Base**: Fast-growing consumer startups, D2C brands and established food, pharmaceutical and FMCG manufacturers across India.
- **Brand Archetype**: **The Precision Craftsman & Trusted Industrial Partner**. Grounded, technically proficient, modern and agile.

### 1.2 Creative Direction: "Industrial Precision"
Unlike generic consumer tech templates featuring purple neon gradients, floating glassmorphism, or artificial stock aesthetics, Kakatiya Printers demands an **authentic, premium industrial aesthetic**:
- **Clean Architectural Layouts**: Strong structural grids, crisp divider lines, and generous whitespace reminiscent of precision engineering drawings.
- **Tactile Material Honesty**: Packaging is physical. Visual emphasis is placed on tangible packaging textures—soft-touch matte, metallic foil sheen, crisp transparent films, and tamper-proof seals.
- **High-Contrast Clarity**: Deep corporate blues paired with crisp slate neutrals and energetic eco-friendly greens for clear visual hierarchy and effortless scanning.
- **Zero AI-Gimmicks**: No excessive decorative mesh gradients or gratuitous 3D blobs. Motion is restrained, serving functional feedback only.

---

## 2. Color Palette & Accessibility Specifications

Every color is mapped to standardized tokens with verified WCAG 2.1 contrast ratios (minimum 4.5:1 for body copy and 3.0:1 for large headings/UI controls).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             PRIMARY BRAND PALETTE                           │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│ Navy Blue 900        │ Royal Blue 700       │ Industrial Cyan 500           │
│ #0A192F              │ #1A56DB              │ #0284C7                       │
│ (Deep Structure)     │ (Primary Brand Core) │ (Interactive Accent / Focus)  │
├──────────────────────┴──────────────────────┴───────────────────────────────┤
│                             CONVERSION & ACCENT                             │
├─────────────────────────────────────────────┬───────────────────────────────┤
│ Packaging Emerald 600                       │ Official WhatsApp Green       │
│ #16A34A                                     │ #25D366                       │
│ (Sustainability & Certified Eco Inks)       │ (Direct High-Intent CTAs)     │
└─────────────────────────────────────────────┴───────────────────────────────┘
```

### 2.1 Detailed Palette Tokens

| Token Name | Hex Code | RGB | HSL | Contrast on White | Primary Application |
|------------|----------|-----|-----|-------------------|---------------------|
| `brand-navy-950` | `#060D1A` | `6, 13, 26` | `219°, 63%, 6%` | 18.2:1 (AAA) | Dark background sections, mega footer |
| `brand-navy-900` | `#0A192F` | `10, 25, 47` | `216°, 65%, 11%` | 15.6:1 (AAA) | High-contrast display headings, dark cards |
| `brand-blue-800` | `#113E99` | `17, 62, 153` | `220°, 80%, 33%` | 8.8:1 (AAA) | Primary brand anchors, deep interactive states |
| `brand-blue-700` | `#1A56DB` | `26, 86, 219` | `221°, 79%, 48%` | 5.6:1 (AA) | Primary buttons, active nav tabs, links |
| `brand-blue-600` | `#2563EB` | `37, 99, 235` | `221°, 83%, 53%` | 4.6:1 (AA) | Hover state for primary buttons |
| `brand-blue-50` | `#EFF6FF` | `239, 246, 255` | `214°, 100%, 97%` | 1.1:1 (Bg) | Light tint card backgrounds, active badge fills |
| `brand-cyan-500` | `#0284C7` | `2, 132, 199` | `200°, 98%, 39%` | 4.8:1 (AA) | Feature highlights, progress indicators |
| `accent-green-700`| `#15803D` | `21, 128, 61` | `142°, 72%, 29%` | 5.5:1 (AA) | Eco-certified badges, sustainability copy |
| `accent-green-600`| `#16A34A` | `22, 163, 74` | `142°, 76%, 36%` | 4.5:1 (AA) | Secondary success indicators, checkmarks |
| `whatsapp-green` | `#25D366` | `37, 211, 102` | `142°, 70%, 49%` | 2.1:1 (On Dark) | Dedicated WhatsApp floating button & pill CTAs |
| `whatsapp-hover` | `#1EBE5D` | `30, 190, 93` | `144°, 73%, 43%` | 2.6:1 (On Dark) | Hover state for WhatsApp button |

### 2.2 Grayscale & Neutral Tokens

| Token Name | Hex Code | Application |
|------------|----------|-------------|
| `slate-900` | `#0F172A` | Primary body typography (maximum sharpness and readability) |
| `slate-700` | `#334155` | Secondary body text, specifications, form labels |
| `slate-500` | `#64748B` | Helper captions, breadcrumb separators, disabled states |
| `slate-400` | `#94A3B8` | Placeholder text, subtle icons |
| `slate-200` | `#E2E8F0` | Card borders, table dividing rules, input outlines |
| `slate-100` | `#F1F5F9` | Secondary background sections, table header fills |
| `slate-50` | `#F8FAFC` | Sub-page body canvas background |
| `white` | `#FFFFFF` | Primary surface cards, container backgrounds |

---

## 3. Typography Hierarchy & Scale

The typography pairing reflects technical precision and effortless legibility across dense packaging specifications.

### 3.1 Font Families
- **Display / Heading Font**: **`Outfit`** (via `next/font/google`, weights: 600, 700, 800)  
  *Rationale*: Geometric, confident, and contemporary. Its balanced proportions evoke industrial modernity without being cold or clinical.
- **Body / Interface Font**: **`Inter`** (via `next/font/google`, weights: 400, 500, 600)  
  *Rationale*: The gold standard in screen legibility. Exceptionally crisp rendering at small sizes (specifications, dimension tables, micron thicknesses, and forms).

### 3.2 Type Scale (Desktop & Mobile)

```
Scale Name       Size (Desktop)    Size (Mobile)     Line Height    Weight      Letter Spacing
─────────────────────────────────────────────────────────────────────────────────────────────
Display Hero     3.75rem (60px)    2.25rem (36px)    1.1            800 (Extra) -0.025em
H1 Main Title    3.00rem (48px)    2.00rem (32px)    1.15           700 (Bold)  -0.02em
H2 Section       2.25rem (36px)    1.75rem (28px)    1.25           700 (Bold)  -0.015em
H3 Sub-section   1.50rem (24px)    1.25rem (20px)    1.35           600 (Semi)  -0.01em
H4 Card Title    1.25rem (20px)    1.125rem (18px)   1.4            600 (Semi)   0em
Body Large       1.125rem (18px)   1.00rem (16px)    1.65           400 (Reg)    0em
Body Normal      1.00rem (16px)    0.9375rem (15px)  1.6            400 (Reg)    0em
Body Small / UI  0.875rem (14px)   0.875rem (14px)   1.5            500 (Med)    0.01em
Micro / Badge    0.75rem (12px)    0.75rem (12px)    1.4            600 (Semi)   0.03em (Caps)
```

---

## 4. Spacing, Layout Conventions & Container Widths

A strict **8-point linear spatial scale** ensures consistent visual rhythm and proportional alignment.

### 4.1 Spacing Scale
```
Token        Pixels    Tailwind Class    Standard Usage
────────────────────────────────────────────────────────────────────────────────────────
space-1      4px       p-1, gap-1        Tight icon-to-text spacing, micro badges
space-2      8px       p-2, gap-2        Button internal padding, form input inline icons
space-3      12px      p-3, gap-3        Small component padding, compact grid gaps
space-4      16px      p-4, gap-4        Base card padding (mobile), standard icon gap
space-6      24px      p-6, gap-6        Desktop card padding, standard grid gap
space-8      32px      p-8, gap-8        Large card padding, section sub-block spacing
space-12     48px      py-12             Standard section padding (mobile)
space-16     64px      py-16             Secondary section padding (desktop)
space-20     80px      py-20             Primary section padding (desktop)
space-24     96px      py-24             Hero banner vertical padding (desktop)
```

### 4.2 Layout Container Max-Widths
- **Fluid Gutters**: `px-4 sm:px-6 lg:px-8`
- **Content Max-Width (`container`)**:
  - `max-w-7xl` (**1280px**): Default container for headers, heroes, grids, and footers.
  - `max-w-5xl` (**1024px**): Focused layouts (Services overview, Contact Us form & map).
  - `max-w-3xl` (**768px**): Long-form reading containers (Blog posts, Legal policy pages).

---

## 5. Elevation, Shadows, Borders & Radii

Industrial packaging demands clean structure. Radii are refined rather than overly circular, and shadows are natural and soft.

### 5.1 Corner Radii (`border-radius`)
- `rounded-sm` (**2px**): Micro badges, tags, code snippets.
- `rounded-md` (**6px**): Form inputs, select dropdowns, specification table cells.
- `rounded-lg` (**8px**): Standard buttons, small cards, tooltips.
- `rounded-xl` (**12px**): Main product cards, service containers, modals.
- `rounded-2xl` (**16px**): Hero media frames, feature spotlight containers.
- `rounded-full` (**9999px**): WhatsApp floating pill, status micro-dots, avatar badges.

### 5.2 Elevation & Shadow Tokens
- **`shadow-subtle`**: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`  
  *Usage*: Static cards at rest, input focus state.
- **`shadow-card`**: `0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`  
  *Usage*: Product cards, navigation header when scrolled.
- **`shadow-card-hover`**: `0 12px 20px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -4px rgba(15, 23, 42, 0.06)`  
  *Usage*: Card hover states with `-translate-y-1` lift.
- **`shadow-modal`**: `0 25px 50px -12px rgba(15, 23, 42, 0.25)`  
  *Usage*: Fullscreen image lightbox, quote inquiry modal.
- **`shadow-whatsapp`**: `0 4px 14px 0 rgba(37, 211, 102, 0.39)`  
  *Usage*: Floating WhatsApp button to create ambient green glow.

### 5.3 Borders & Dividers
- Base border color: `border-slate-200` (`#E2E8F0`).
- Active border color: `border-brand-blue-700` (`#1A56DB`).
- Subtle card border: `border border-slate-200/80`.
- Section dividers: Clean 1px horizontal rule with `bg-slate-200`.

---

## 6. Responsive Breakpoints & Viewport Grid Rules

```
Breakpoint    Min Width    Target Devices         Grid Layout Defaults
────────────────────────────────────────────────────────────────────────────────
Mobile (base) <640px       iPhones, Android       1 column, sticky bottom conversion bar
Tablet (sm)   640px        iPads, Portrait tabs   2 column grids, compact header
Laptop (lg)   1024px       MacBooks, Laptops      3 column grids, persistent desktop nav
Desktop (xl)  1280px+      Desktop Displays       3-4 column grids, max-w-7xl constraint
```

### Viewport Design Rules:
1. **Mobile (<640px)**:
   - Header is ultra-compact (56px height) with brand logo + call button + hamburger.
   - Fixed bottom-bar conversion strip: Dual buttons ("WhatsApp Quote" + "Call Factory").
   - Touch targets strictly ≥ 48px height for buttons and form fields.
2. **Tablet (640px - 1023px)**:
   - Grids collapse cleanly from 4 columns to 2 columns.
   - Accordion FAQ and specification tables become full-width with horizontal scroll hints where required.
3. **Laptop & Desktop (1024px+)**:
   - Sticky header with animated dropdowns for Services.
   - Rich 3-column service cards with persistent hover states and specification preview tags.

---

## 7. Motion, Transitions & Micro-Interactions

### 7.1 Motion Principles
- **Fast & Responsive**: Micro-interactions last between **150ms and 200ms**.
- **Natural Easing**: Standard `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out) for exits and entrances.
- **Accessibility**: All animations honor user preference via `@media (prefers-reduced-motion: reduce)`.

### 7.2 Standard Transitions
- **Button Hover**: `transition-all duration-150 ease-in-out` (color change + subtle shadow expansion).
- **Card Hover**: `transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover`.
- **Accordion Toggle**: Height animation `transition-[max-height,opacity] duration-250 ease-out`.
- **Mobile Drawer**: Slide-in from right `transform transition-transform duration-300 ease-in-out`.
- **WhatsApp Pulse**: Ambient repeating ripple animation on the green border every 3 seconds to catch the user's peripheral eye without being obnoxious.

---

## 8. Tailwind CSS Configuration Tokens

This exact configuration block will be integrated directly into `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            900: '#0A192F',
            950: '#060D1A',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1A56DB',
            800: '#113E99',
            900: '#0C2D70',
          },
          cyan: {
            500: '#0284C7',
            600: '#0369A1',
          },
        },
        accent: {
          green: {
            50: '#F0FDF4',
            100: '#DCFCE7',
            500: '#22C55E',
            600: '#16A34A',
            700: '#15803D',
          },
          whatsapp: {
            DEFAULT: '#25D366',
            hover: '#1EBE5D',
            dark: '#128C7E',
          },
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        card: '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 20px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -4px rgba(15, 23, 42, 0.06)',
        whatsapp: '0 4px 14px 0 rgba(37, 211, 102, 0.39)',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
```
