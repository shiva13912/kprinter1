export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || 'Hello Kakatiya Printers, I want to inquire about custom packaging';
  return `https://wa.me/919391014493?text=${encodeURIComponent(msg)}`;
}

export const companyInfo = {
  name: 'Kakatiya Printers',
  legalName: 'Kakatiya Printers',
  tagline: 'Pouch Printing Without Cylinder | Hyderabad',
  description:
    'Hyderabad’s premier cylinder-free flexible packaging and custom pouch printing partner. Delivering world-class stand-up pouches, roll form labels, and shrink sleeves with zero plate costs and low MOQs.',
  phone: '+91 93910 14493',
  phoneClean: '+919391014493',
  phoneDisplay: '+91 93910 14493',
  whatsappUrl: getWhatsAppUrl(),
  email: 'info@kakatiyaprinters.com',
  address: {
    street: 'I.D.A, Uppal',
    colony: 'Laxmi Narayan Nagar Colony',
    locality: 'Ramanthapur',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500039',
    pincode: '500039',
    country: 'India',
    full: 'I.D.A, Uppal, Laxmi Narayan Nagar Colony, Ramanthapur, Hyderabad, Telangana 500039, India',
  },
  contact: {
    phone: '+91 93910 14493',
    phoneTel: '+919391014493',
    phoneFormatted: '+91 93910 14493',
    email: 'info@kakatiyaprinters.com',
    whatsappNumber: '919391014493',
    whatsappUrl: (message?: string) => getWhatsAppUrl(message),
  },
  hours: 'Monday – Saturday: 9:00 AM – 7:30 PM IST',
  social: {
    facebook: 'https://www.facebook.com/kakatiyaprinters',
    instagram: 'https://www.instagram.com/_kakatiyaprinters_/',
    youtube: 'https://www.youtube.com/@kakatiyaprinters',
  },
  mapEmbedUrl:
    'https://maps.google.com/maps?q=kakatiya%20printers%20I.D.A%2C%20Uppal%2C%20Laxmi%20Narayan%20Nagar%20Colony%2C%20Ramanthapur%2C%20Hyderabad%2C%20Telangana%20500039&t=m&z=12&output=embed&iwloc=near',
};
