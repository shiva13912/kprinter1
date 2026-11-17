export interface TestimonialItem {
  id: string;
  clientName: string;
  designation?: string;
  company: string;
  industry: string;
  stars: number;
  quote: string;
  highlight: string;
}

export const verifiedTestimonials: TestimonialItem[] = [
  {
    id: 'ozo-pesticides',
    clientName: 'Ravi',
    designation: 'Operations Head',
    company: 'Ozo Pesticides',
    industry: 'Agrochemicals & Plant Protection',
    stars: 5,
    highlight: 'Saved our launch deadline on a public holiday',
    quote:
      'Kakatiya Printers is simply the best partner you could ask for. We had a launch crisis that needed design, print, and delivery right on a major public holiday. Because they handle everything under one roof, they mobilized instantly and got the entire job dispatched that same holiday! They didn\'t just meet our deadline — they saved our launch. This is the definition of a trustworthy vendor.',
  },
  {
    id: 'biofactor',
    clientName: 'Dr. L.N. Reddy',
    designation: 'CEO',
    company: 'Biofactor',
    industry: 'Bio-Nutraceuticals & Health',
    stars: 5,
    highlight: 'No-cylinder technology is game-changing for small batches',
    quote:
      'Kakatiya Printers offer all types of printing services — from flyers and brochures to flexible pouches without cylinders. Excellent print quality, timely delivery, and professional approach. Highly recommended for businesses of all sizes. They provide premium results at budget-friendly prices. The “no cylinder” technology is very useful for small quantity prints. Excellent service all around!',
  },
  {
    id: 'ok-food',
    clientName: 'Raghu',
    designation: 'Managing Director',
    company: 'OK Food',
    industry: 'Packaged Food & Confectionery',
    stars: 5,
    highlight: 'Seamless execution from design to dispatch',
    quote:
      'We want to specifically commend the team at Kakatiya Printers for their outstanding teamwork and efficiency. The process of getting our order designed, printed, finished, and delivered was seamless. That level of coordination is a clear sign of a disciplined and professional team. Thank you for consistently executing complex projects on time and making our job easier.',
  },
  {
    id: 'yes-agri',
    clientName: 'Poosapati Ashok',
    designation: 'Brand Manager',
    company: 'Yes Agri',
    industry: 'Agriculture & Seed Packaging',
    stars: 5,
    highlight: 'Flawless color matching on both pouches and roll labels',
    quote:
      'We\'re most impressed by how they handle color. Our brand colors are hard to get right, but Kakatiya Printers makes sure the color is perfectly matched every single time, on both our pouches and our labels. This consistency means our brand always looks professional on the shelf, which really helps our customers trust our products.',
  },
  {
    id: 'sagar-seeds',
    clientName: 'Tirupati Reddy',
    designation: 'Supply Chain Director',
    company: 'Sagar Seeds',
    industry: 'Seeds & Agri Products',
    stars: 5,
    highlight: 'A single accountable partner for all packaging needs',
    quote:
      'Not only have they streamlined our complex packaging orders, but we now also rely on them for high-quality projects like books, which require exceptional binding and cover work. It’s a relief knowing that such a diverse range of our print needs, from complex packaging to detailed publications, are all managed by a single, accountable team.',
  },
  {
    id: 'hanvika-radar',
    clientName: 'Dr. Bolliboina Nageswara Rao',
    designation: 'Director',
    company: 'Hanvika Radar',
    industry: 'Industrial & Healthcare',
    stars: 5,
    highlight: 'Right technology and expertise in flexo printing',
    quote:
      'When we moved into products requiring flexo printing (specifically our pouches and roll-form labels), we were relieved to see Kakatiya rise to the challenge. They invested in the right technology and expertise, proving their capability once again.',
  },
];
