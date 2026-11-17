# COMPONENT DESIGN & INTERACTION GUIDE

**Project**: Kakatiya Printers Website Modernization  
**Role**: Senior UI/UX Designer  
**Status**: Proposal for Review & Approval  
**Date**: November 15, 2026  

---

## 1. Button Styles & Interaction States

Buttons are the primary conversion drivers on the website. Their visual hierarchy directs users smoothly from passive browsing to direct sales consultations.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             BUTTON HIERARCHY                                │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│ Primary Solid        │ WhatsApp Direct CTA  │ Secondary Outline             │
│ [Request a Quote]    │ [Chat on WhatsApp]   │ [Explore Capabilities]        │
│ Brand Blue #1A56DB   │ Official #25D366     │ Slate Border / Transparent    │
└──────────────────────┴──────────────────────┴───────────────────────────────┘
```

### 1.1 Button Variants & States Table

| Variant | Rest State | Hover State | Active (Pressed) | Focus Ring (Keyboard) | Disabled State |
|---------|------------|-------------|------------------|-----------------------|----------------|
| **Primary Solid** | `bg-brand-blue-700 text-white shadow-sm` | `bg-brand-blue-600 shadow-md -translate-y-0.5` | `bg-brand-blue-800 translate-y-0` | `ring-2 ring-brand-blue-500 ring-offset-2` | `bg-slate-200 text-slate-400 cursor-not-allowed` |
| **WhatsApp CTA** | `bg-accent-whatsapp text-white shadow-whatsapp` | `bg-accent-whatsapp-hover shadow-lg -translate-y-0.5` | `bg-emerald-700 translate-y-0` | `ring-2 ring-emerald-400 ring-offset-2` | `bg-slate-200 text-slate-400 cursor-not-allowed` |
| **Secondary Outline** | `border-2 border-brand-blue-700 text-brand-blue-700 bg-transparent` | `bg-brand-blue-50 text-brand-blue-800 border-brand-blue-800` | `bg-brand-blue-100` | `ring-2 ring-brand-blue-500 ring-offset-2` | `border-slate-200 text-slate-400` |
| **Ghost / Subtle** | `text-slate-700 bg-transparent` | `bg-slate-100 text-slate-900` | `bg-slate-200` | `ring-2 ring-slate-400 ring-offset-2` | `text-slate-300` |

### 1.2 Button Sizes & Padding Specs
- **Large (Hero & Main CTAs)**: `h-13 px-8 py-3.5 text-base font-semibold rounded-lg gap-2.5` (Target: 52px height)
- **Medium (Cards & Forms)**: `h-11 px-6 py-2.5 text-sm font-medium rounded-lg gap-2` (Target: 44px height)
- **Small (Badges & Table CTAs)**: `h-9 px-4 py-1.5 text-xs font-medium rounded-md gap-1.5` (Target: 36px height)

---

## 2. Navigation Header & Mobile Drawer

### 2.1 Desktop Header
- **Default State**:
  - Background: `bg-white/95 backdrop-blur-md`
  - Border: `border-b border-slate-200/80`
  - Height: `h-20` (80px)
  - Logo: `Kakatiya-Logo-RGB.png` (`w-auto h-10`)
  - Nav Links: `text-sm font-medium text-slate-700 hover:text-brand-blue-700 transition-colors`
  - Active Route: `text-brand-blue-700 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-blue-700`
- **Scrolled State**:
  - Automatically transitions to `shadow-card bg-white/98` on scroll position > 20px.
- **Services Dropdown (Mega Hover)**:
  - Container: `bg-white border border-slate-200 rounded-xl shadow-modal p-4 w-[420px]`
  - Item Layout: 2-column list with icon, title, and micro-description.
  - Hover on Item: `bg-slate-50 rounded-lg p-2.5 transition-colors`

### 2.2 Mobile Navigation Header & Drawer
- **Mobile Header Bar**:
  - Height: `h-16` (64px) with sticky positioning `sticky top-0 z-50`.
  - Controls: Logo (left), One-tap Phone Call button (center-right), Hamburger toggle (far-right).
- **Mobile Drawer**:
  - Width: `w-[85vw] max-w-sm` sliding from the right edge with backdrop overlay `bg-slate-900/60 backdrop-blur-sm`.
  - Accordion for Services: Tap to expand with chevron rotation.
  - Footer Action Bar: Full-width WhatsApp button + Factory call button.

---

## 3. Cards & Product Visual Containers

Industrial packaging products require physical framing, subtle elevation, and crisp imagery.

### 3.1 Product Render Showcase Card (`ProductCard.tsx`)
```
┌────────────────────────────────────────┐
│ [Top Badge: Food Grade]                │
│                                        │
│         [High-Res Pouch Image]         │
│       (Artboard-1-scaled_jpg)          │
│                                        │
├────────────────────────────────────────┤
│ Stand-Up Zipper Pouch                  │
│ Soft-Touch Matte • Multi-Layer Barrier │
│ Low MOQ: 500 Pcs • 7 Days Dispatch     │
├────────────────────────────────────────┤
│ [Quick WhatsApp Quote]   [View Specs →]│
└────────────────────────────────────────┘
```
- **Container**: `bg-white rounded-xl border border-slate-200/80 shadow-subtle overflow-hidden flex flex-col`
- **Image Frame**: `relative aspect-square bg-slate-50 flex items-center justify-center p-6 overflow-hidden`
- **Image Hover Effect**: Image scales up smoothly `group-hover:scale-105 transition-transform duration-300 ease-out`.
- **Card Hover State**: `hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-blue-200 transition-all duration-200`.

### 3.2 Service Feature Card (`ServiceCard.tsx`)
- **Structure**: Clean 3-tier card highlighting technical capabilities:
  1. Icon Header: Industrial icon (Pouch, Spool, Cylinder-Off, Film Reel) encased in a rounded square `bg-brand-blue-50 text-brand-blue-700 p-3 rounded-lg`.
  2. Headline & Paragraph: Bold H3 + 2-line value proposition.
  3. Specification Pills: Material badges (`BOPP`, `PET`, `LDPE`, `Kraft Paper`) rendered in `bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded`.

### 3.3 Blog Article Card (`BlogCard.tsx`)
- **Structure**: Horizontal card on tablet/desktop, vertical card on mobile:
  - Header: 16:9 featured cover image with category pill overlaid.
  - Body: Reading time estimate ("5 min read"), publication date, bold title (H3), 2-line excerpt.
  - Footer: "Read Full Article →" text link with right-arrow transition.

---

## 4. Form Controls & Validation States

Forms are high-stakes conversion points where poor design causes drop-offs. Every input has explicit rest, focus, error, and success states.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           FORM INPUT STATES                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ Rest State:      [ Full Name                                              ] │
│                  Border: #E2E8F0 (Slate 200) | Text: #0F172A                │
├─────────────────────────────────────────────────────────────────────────────┤
│ Focus State:     [ Rahul Sharma                                         | ] │
│                  Border: #1A56DB (Brand Blue 700) | Ring: Blue 500 2px      │
├─────────────────────────────────────────────────────────────────────────────┤
│ Error State:     [ +91 93910                                              ] │
│                  Border: #EF4444 (Red 500) | Message: "Enter 10-digit phone"│
├─────────────────────────────────────────────────────────────────────────────┤
│ Success State:   [ rahul@acmepackaging.in                               ✓ ] │
│                  Border: #16A34A (Green 600) | Green Checkmark Icon         │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Input Specification
- **Height**: `h-12` (48px) for comfortable touch targets on mobile devices.
- **Typography**: `text-sm font-normal text-slate-900 placeholder:text-slate-400`.
- **Padding**: `px-4 py-3`.
- **Background**: `bg-white`.
- **Border**: `border border-slate-200 rounded-md transition-all duration-150`.
- **Focus Ring**: `focus:outline-none focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-100`.
- **Error State**: `border-red-500 focus:border-red-600 focus:ring-red-100 text-red-900`.
- **Error Label**: `text-xs text-red-600 font-medium mt-1.5 flex items-center gap-1`.

---

## 5. Accordion FAQ Component (`FaqAccordion.tsx`)

Used extensively on service pages to display technical packaging answers and material breakdowns without cluttering the page.

### 5.1 States & Behavior
- **Collapsed (Rest)**:
  - Container: `border border-slate-200 rounded-lg bg-white overflow-hidden mb-3 transition-colors`
  - Trigger Header: `w-full px-6 py-4 flex items-center justify-between text-left text-base font-semibold text-slate-900 hover:text-brand-blue-700`
  - Indicator: Chevron down icon (`text-slate-400 group-hover:text-brand-blue-700 transition-transform duration-200`)
- **Expanded (Active)**:
  - Container: `border-brand-blue-200 bg-brand-blue-50/20 shadow-sm`
  - Trigger Header: `text-brand-blue-800 font-bold`
  - Indicator: Chevron rotates 180 degrees (`rotate-180 text-brand-blue-700`)
  - Content Panel: `px-6 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-100`

---

## 6. Badges & Status Micro-Pills

Micro-badges communicate immediate technical qualifications to B2B procurement buyers:

| Badge Type | Visual Styling | Sample Label |
|------------|----------------|--------------|
| **Commercial Advantage** | `bg-blue-50 text-brand-blue-800 border border-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full` | `₹0 Plate Costs` / `Low MOQ` |
| **Technical Certification** | `bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-0.5 rounded-full` | `100% Food Grade` / `FSSAI Ready` |
| **Production Speed** | `bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-2.5 py-0.5 rounded-full` | `7–10 Days Dispatch` |
| **Material Finish** | `bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium px-2 py-0.5 rounded` | `Soft-Touch Matte` / `Glossy` |

---

## 7. Modal & Fullscreen Image Lightbox

Restores the corrupted legacy `/gallery` into a high-performance visual browser.

### 7.1 Lightbox Architecture
- **Backdrop**: `fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4`
- **Dialog Frame**: `relative max-w-4xl w-full bg-white rounded-2xl shadow-modal overflow-hidden flex flex-col`
- **Header**: Image title, packaging category badge, and close button (`X` icon in a circular button).
- **Media Body**: High-resolution image viewport with responsive zoom controls.
- **Action Footer**:
  - Sample details (Dimensions, substrate layers, finish).
  - Direct Action: "Inquire About This Packaging on WhatsApp" button.

---

## 8. Floating WhatsApp Conversion Widget

The single highest-converting interactive asset for Indian B2B buyers.

### 8.1 Visual & Responsive Specs
- **Desktop Positioning**: `fixed bottom-6 right-6 z-40 flex items-center gap-3`
- **Pill Badge**:
  - Tooltip: `bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-md hidden sm:block` ("Need custom pouches? Get instant quote")
  - Button: `w-14 h-14 bg-accent-whatsapp text-white rounded-full flex items-center justify-center shadow-whatsapp hover:scale-105 active:scale-95 transition-all`
- **Mobile Thumb Zone**:
  - Positioned safely above standard browser navigation bars (`bottom-5 right-5`).
  - Subtle ripple pulse ring: An absolute-positioned pseudo-element expanding from the button every 3.5 seconds.
