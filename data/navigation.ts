export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Pouch Printing Without Cylinder',
        href: '/services/pouch-printing-without-cylinder',
        description: 'Zero plate cost stand-up zipper pouches with food grade barrier.',
        badge: 'Zero Plate Cost',
      },
      {
        label: 'Roll Form Label Printing',
        href: '/services/roll-form-label-printing',
        description: 'High-speed automatic dispensing labels and custom bottle stickers.',
        badge: 'High Speed',
      },
      {
        label: 'Shrink Sleeves Printing',
        href: '/services/shrink-sleeves-printing',
        description: '360° full-body contour sleeve labels for bottles, jars & cans.',
        badge: '360° Wrap',
      },
      {
        label: 'Film Printing Services',
        href: '/services/film-printing-services',
        description: 'Continuous printed laminate rolls for automated FFS machines.',
        badge: 'FFS Ready',
      },
      {
        label: 'Flat Bottom Pouches',
        href: '/services/flat-bottom-pouches',
        description: 'Premium 5-panel box pouches for coffee, dry fruits, and pet food.',
        badge: 'Premium Box',
      },
    ],
  },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const footerServices = [
  { label: 'Pouch Printing Without Cylinder', href: '/services/pouch-printing-without-cylinder' },
  { label: 'Roll Form Label Printing', href: '/services/roll-form-label-printing' },
  { label: 'Shrink Sleeves Printing', href: '/services/shrink-sleeves-printing' },
  { label: 'Film Printing Services', href: '/services/film-printing-services' },
  { label: 'Flat Bottom Pouches', href: '/services/flat-bottom-pouches' },
];

export const footerQuickLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Packaging Gallery', href: '/gallery' },
  { label: 'Blogs & Insights', href: '/blogs' },
  { label: 'Download Product Catalog (PDF)', href: '/documents/kakatiya-printers-packaging-guide.pdf' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];
