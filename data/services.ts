export interface ServiceSpecification {
  label: string;
  value: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceIndustry {
  name: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroBadge: string;
  shortDescription: string;
  heroImage: string;
  moq: string;
  turnaround: string;
  overview: string[];
  features: ServiceFeature[];
  specifications: ServiceSpecification[];
  materials: string[];
  finishes: string[];
  industries: ServiceIndustry[];
  faqs: ServiceFAQ[];
  sampleImages: string[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'pouch-printing-without-cylinder',
    title: 'Pouch Printing Without Cylinder',
    metaTitle: 'Pouch Printing Without Cylinder | Custom Stand-Up Zipper Pouches',
    metaDescription: 'Kakatiya Printers offers high-quality pouch printing without cylinders using advanced digital flexo technology. Zipper, food-grade, matte, and glossy finishes with 7-10 day turnaround in Hyderabad.',
    heroBadge: 'Zero Cylinder Cost • 7-10 Days Turnaround',
    shortDescription: 'Smart, resealable, durable pouches printed without expensive metal cylinders. Ideal for food, retail, cosmetic, and agricultural products needing short runs or multi-SKU flexibility.',
    heroImage: '/images/hero/pouch-printing-hyderabad-hero.webp',
    moq: 'Low MOQ starting from 500 pcs',
    turnaround: '7 - 10 Working Days',
    overview: [
      'At Kakatiya Printers, our Zipper Pouch Printing combines the flexibility of Pouch Printing Without Cylinders with premium materials and advanced technology. This means zero cylinder cost, faster delivery, and high-definition results for every design.',
      'Perfect for snacks, dry fruits, powders, or pet food, our zipper pouches ensure easy resealing while maintaining product freshness and integrity. We print on durable materials like PET, BOPP, and aluminum laminates, offering exceptional barrier protection and an attractive finish.',
      'Whether you are a startup launching your very first packaging or an established brand rolling out seasonal limited editions, our cylinder-free process lets you test, iterate, and scale with complete financial freedom.'
    ],
    features: [
      {
        title: 'Zero Cylinder / Plate Investment',
        description: 'Save between ₹50,000 to ₹1,00,000 upfront. We eliminate the need for costly copper cylinders required by traditional gravure printing.'
      },
      {
        title: 'Smart, Resealable Zipper Pouches',
        description: 'Airtight resealable press-to-close zippers keep contents crisp, aroma-locked, and protected from humidity after opening.'
      },
      {
        title: 'Certified Food-Grade Multi-Layer Films',
        description: '100% compliant with FSSAI regulations using non-toxic inks and high-barrier laminates suitable for direct food contact.'
      },
      {
        title: 'Premium Matte & Gloss Finishes',
        description: 'Choose sophisticated soft-touch matte for organic and premium brands, or vibrant high-contrast gloss for maximum supermarket shelf pop.'
      }
    ],
    specifications: [
      { label: 'Pouch Formats', value: 'Stand-Up Pouch with Zipper, 3-Side Seal, Flat Bottom Box Pouch, Center Seal Pillow' },
      { label: 'Layer Structures', value: 'PET + Poly, PET + MetPET + Poly, Kraft Paper + Foil + PE, Matte BOPP + MetPET + PE' },
      { label: 'Barrier Properties', value: 'High Oxygen, Moisture, Aroma, and UV Light Barrier' },
      { label: 'Closure Options', value: 'Press-to-Close Single/Double Zipper, Tear Notch, Euro Slot / Punch Hole' },
      { label: 'Print Technology', value: 'High-Resolution Digital Flexographic (Zero Plate Charges)' },
      { label: 'Production Plant', value: 'IDA Uppal, Hyderabad, Telangana' }
    ],
    materials: [
      'PET (Polyethylene Terephthalate)',
      'BOPP (Biaxially Oriented Polypropylene)',
      'MetPET (Metallized Polyester Barrier)',
      'Aluminum Foil (Ultra-high barrier)',
      'Natural Brown Kraft Paper Laminate',
      'Food-Grade LDPE Sealing Layer'
    ],
    finishes: [
      'Soft-Touch Matte Finish',
      'High-Gloss Vibrant Finish',
      'Transparent Clear Windows',
      'Metallic Foil Effects',
      'Textured Paper Feel'
    ],
    industries: [
      {
        name: 'Food & Beverage',
        description: 'Snacks, namkeen, spices, dry fruits, tea, artisanal coffee beans, confectionery, and organic pulses.'
      },
      {
        name: 'Cosmetics & Personal Care',
        description: 'Face masks, bath salts, herbal powders, scrubs, and travel-size beauty formulations.'
      },
      {
        name: 'Pet Food & Treats',
        description: 'Dog chews, cat kibble, bird seeds, and nutritional animal supplements with strong aroma barrier.'
      },
      {
        name: 'Nutraceuticals & Health',
        description: 'Protein powders, dietary supplements, effervescent tablets, and ayurvedic botanicals.'
      },
      {
        name: 'Agriculture & Seeds',
        description: 'Pesticides, bio-fertilizers, hybrid seed packaging, and crop nutrition powders.'
      }
    ],
    faqs: [
      {
        question: 'How do you print custom pouches without cylinders?',
        answer: 'We utilize state-of-the-art digital flexographic technology where your artwork files are sent directly to the press, just like modern commercial digital printing. This eliminates the multi-thousand rupee cost of engraving steel/copper cylinders.'
      },
      {
        question: 'What is the minimum order quantity (MOQ)?',
        answer: 'Because there are no cylinder setup bottlenecks, our MOQs start from as low as 500 to 1,000 pouches, making it economical for test marketing, regional trials, and startup launches.'
      },
      {
        question: 'Are your pouches safe for edible food packaging?',
        answer: 'Yes. All our packaging laminates, barrier layers, and printing inks are fully certified food-grade and comply with FSSAI regulations for direct and indirect food contact.'
      },
      {
        question: 'What is the standard turnaround time?',
        answer: 'Once artwork proofs are approved, dispatch takes just 7 to 10 working days, compared to the 30 to 45 days typically required for cylinder manufacturing and proofing.'
      }
    ],
    sampleImages: [
      '/images/products/Artboard-1.webp',
      '/images/products/Artboard-2.webp',
      '/images/products/Artboard-3.webp',
      '/images/products/Artboard-4.webp'
    ]
  },
  {
    slug: 'roll-form-label-printing',
    title: 'Roll Form Label Printing',
    metaTitle: 'Roll Form Label Printing | Custom Self-Adhesive Product Labels Hyderabad',
    metaDescription: 'High-speed roll form label printing for automatic dispensing machines and bottle packaging. Chromo, PP, transparent, and metallic labels printed in Hyderabad with zero cylinder setup.',
    heroBadge: 'Auto-Dispenser Compatible • Precision Die-Cut',
    shortDescription: 'High-speed, machine-friendly roll labels delivering razor-sharp text, vibrant graphics, and reliable adhesion for bottles, jars, cans, and cartons.',
    heroImage: '/images/products/roll-label-mockup-1.webp',
    moq: 'From 1,000 labels per roll',
    turnaround: '5 - 7 Working Days',
    overview: [
      'At Kakatiya Printers, we specialize in Roll Form Label Printing that delivers outstanding clarity, perfect alignment, and unmatched durability. Using advanced digital cylinder-free technology, we print customized roll labels for bottles, jars, cans, and containers used in food, cosmetic, and industrial products.',
      'Our Roll Form Label Printing service ensures smooth and efficient labeling for every type of packaging line. Designed for high-speed operations, these labels are ideal for automatic applicators and precision machinery. With vibrant colors, accurate cutting, and durable adhesives, we help your products look professional while maintaining performance under all storage and handling conditions.',
      'Whether you need high-tack adhesives for textured plastic drums, waterproof transparent labels for cosmetic jars, or freezer-grade adhesives for chilled foods, we engineer the label substrate to your exact specifications.'
    ],
    features: [
      {
        title: 'Automatic Machine Compatibility',
        description: 'Wound on standard 1-inch or 3-inch cores with uniform tension, gap spacing, and sensor timing marks for jam-free high-speed dispensing.'
      },
      {
        title: 'Moisture, Chemical & Oil Resistance',
        description: 'Tough PP and PET films withstand condensation in refrigerators, oil drips on condiment bottles, and harsh chemical handling.'
      },
      {
        title: 'Specialty Adhesives for Every Surface',
        description: 'Permanent acrylic, ultra-strong high-tack, removable, and sub-zero deep-freeze adhesives for glass, HDPE, PET, and corrugated board.'
      },
      {
        title: 'High-Density Barcodes & QR Codes',
        description: 'Micron-level registration ensures GS1-standard barcodes and variable 2D QR codes scan instantly on logistics and retail scanners.'
      }
    ],
    specifications: [
      { label: 'Core Sizes', value: '1 inch (25mm), 1.5 inch (38mm), 3 inch (76mm) standard machine cores' },
      { label: 'Substrates', value: 'Chromo Paper, Mirror Coat, White PP, Clear Transparent BOPP, Silver Metallized Film' },
      { label: 'Adhesive Types', value: 'Permanent Water-based Acrylic, Hot-Melt, Removable, Deep-Freeze Grade' },
      { label: 'Winding Direction', value: 'Top-out, Bottom-out, Right-out, Left-out (Wind 1 through 8)' },
      { label: 'Finishing Options', value: 'Gloss / Matte UV Varnish, Thermal Lamination, Cold Foil Stamping' },
      { label: 'Quality Control', value: '100% Optical Inspection for Defect-Free Rolls' }
    ],
    materials: [
      'Semi-Gloss Chromo Paper',
      'Mirror Coat Paper',
      'White Polypropylene (PP)',
      'Clear / Ultra-Transparent Film',
      'Silver Metallized Polyester',
      'Direct Thermal & Thermal Transfer Paper'
    ],
    finishes: [
      'UV Gloss Varnish',
      'Matte Silk Varnish',
      'Thermal Lamination (Scratch Resistant)',
      'Gold & Silver Metallic Accents',
      'Tamper-Evident Security Cuts'
    ],
    industries: [
      {
        name: 'Food & Beverage',
        description: 'Sauce bottles, pickle jars, honey containers, edible oils, beverage cans, and dairy cartons.'
      },
      {
        name: 'Pharmaceutical & Healthcare',
        description: 'Medicine bottles, cough syrups, sanitizers, pill vials, and diagnostic reagent containers.'
      },
      {
        name: 'Cosmetics & Personal Care',
        description: 'Shampoo bottles, body lotions, essential oil droppers, face creams, and serum pumps.'
      },
      {
        name: 'Lubricants & Chemical Drums',
        description: 'Engine oil cans, pesticide containers, industrial cleaners, and paint buckets.'
      }
    ],
    faqs: [
      {
        question: 'Can these roll labels run on automatic labelling machines?',
        answer: 'Yes, absolutely. We supply labels on standard 1-inch or 3-inch cores with precise pitch, sensor gap matrix, and winding orientation (Wind 1-8) tailored specifically to your applicator equipment.'
      },
      {
        question: 'Do you offer waterproof and oil-resistant labels?',
        answer: 'Yes. Our White PP, Transparent BOPP, and metallized film labels with UV varnish or thermal lamination are 100% waterproof, oil-resistant, and smudge-proof.'
      },
      {
        question: 'Can you print variable data like batch numbers or unique QR codes?',
        answer: 'Yes. Our digital presses support variable data printing (VDP), allowing sequential serial numbers, lot codes, and dynamic QR codes for track-and-trace authentication.'
      }
    ],
    sampleImages: [
      '/images/products/roll-label-mockup-1.webp',
      '/images/products/roll-label-mockup-2.webp',
      '/images/samples/packaging-sample-02.jpeg',
      '/images/samples/packaging-sample-05.jpeg'
    ]
  },
  {
    slug: 'shrink-sleeves-printing',
    title: 'Shrink Sleeves Printing',
    metaTitle: 'Shrink Sleeves Printing | 360° Custom Bottle & Jar Labels Hyderabad',
    metaDescription: '360-degree full-body shrink sleeves printing for contoured bottles, cans, and jars. Waterproof, tamper-evident neck bands with zero cylinder costs from Kakatiya Printers.',
    heroBadge: '360° Full-Body Wrap • Contoured Precision',
    shortDescription: 'Full-body contour labels that shrink seamlessly to complex bottle, can, and jar shapes, maximizing shelf impact and brand storytelling.',
    heroImage: '/images/products/Artboard-5.webp',
    moq: 'Low MOQ starting from 1,000 sleeves',
    turnaround: '7 - 10 Working Days',
    overview: [
      'At Kakatiya Printers, we specialize in shrink sleeve printing that gives your products a vibrant, full-body wrap with seamless design coverage. Using high-definition digital technology, we deliver durable, water-resistant sleeves that conform perfectly to any bottle, jar, or container shape.',
      'Our shrink sleeves are designed for both aesthetics and performance. Printed with precision on high-quality PETG, PVC, or OPS films, they ensure stunning color reproduction and a smooth, wrinkle-free finish after application. With digital cylinder-free printing, you can order low or high quantities with consistent quality and faster turnaround times.',
      'From beverage bottles and aerosol cans to health supplements and personal care jars, 360-degree shrink sleeves turn ordinary packaging into eye-catching masterpieces on retail shelves.'
    ],
    features: [
      {
        title: 'Complete 360-Degree Brand Canvas',
        description: 'Utilize every millimeter of container surface from cap to base for bold graphics, nutrition charts, and multi-lingual ingredient lists.'
      },
      {
        title: 'Tamper-Evident Security Seals',
        description: 'Integrate perforated cap bands that break upon initial opening, providing consumers with visual proof of freshness and authenticity.'
      },
      {
        title: 'Abrasion & Moisture Proof Reverse Printing',
        description: 'Inks are printed on the inside of the transparent film sleeve, shielding graphics completely from scratching, transport scuffs, and water immersion.'
      },
      {
        title: 'Extreme Contour Shrinkage Up to 75%',
        description: 'High-shrink PETG polymers hug extreme hourglass curves, fluted necks, and asymmetrical geometric bottles without distortion.'
      }
    ],
    specifications: [
      { label: 'Substrate Materials', value: 'PET-G (High Shrinkage up to 75%), PVC (Economic 50-60%), OPS (Ultra-light)' },
      { label: 'Thickness Gauge', value: '35 to 50 Microns' },
      { label: 'Perforations', value: 'Vertical, Horizontal, T-Perforation for Easy Opening' },
      { label: 'Supply Formats', value: 'Cut pieces (individual sleeves) or Continuous rolls for automated sleeving tunnels' },
      { label: 'Shrink Tunnel Types', value: 'Steam tunnel, Hot air tunnel, or Radiant electric tunnel compatible' },
      { label: 'Special Effects', value: 'Metallic Foil, Matte-Gloss Combination, Window Clear Cutouts' }
    ],
    materials: [
      'PET-G Film (Polyethylene Terephthalate Glycol - Eco-friendlier)',
      'PVC Heat Shrink Film (Economical general purpose)',
      'OPS Film (Oriented Polystyrene for ultra-soft squeeze containers)'
    ],
    finishes: [
      'Gloss Finish with high brilliance',
      'Matte Finish for satin luxury feel',
      'Clear Transparent Product Window',
      'Foil Stamped Metallic Accents'
    ],
    industries: [
      {
        name: 'Beverages & Bottled Water',
        description: 'Juices, energy drinks, kombucha, dairy beverages, and flavoured water in contoured PET bottles.'
      },
      {
        name: 'Cosmetics & Personal Care',
        description: 'Lotion dispensers, shampoo bottles, hair serums, deodorant cans, and body wash containers.'
      },
      {
        name: 'Food & Sauces',
        description: 'Ketchup squeeze bottles, salad dressings, spice shaker jars, and mayonnaise jars.'
      },
      {
        name: 'Pharmaceutical & Home Care',
        description: 'Disinfectant sprays, liquid detergents, surface cleaners, and health supplements.'
      }
    ],
    faqs: [
      {
        question: 'What is the advantage of shrink sleeves over standard adhesive labels?',
        answer: 'Shrink sleeves offer 360-degree graphics coverage over the entire height and contours of uniquely shaped containers, while simultaneously providing tamper-evident neck sealing in a single application.'
      },
      {
        question: 'How do you prevent the graphic design from distorting when the sleeve shrinks?',
        answer: 'Our prepress engineering team runs specialized grid-distortion mapping software that pre-compensates for dimensional contraction at curved bottlenecks, ensuring straight lines and circular logos remain flawless after heat shrinking.'
      },
      {
        question: 'Can you supply shrink sleeves in cut pieces as well as rolls?',
        answer: 'Yes. We supply individual cut sleeves for manual positioning or continuous perforated rolls for high-speed automatic sleeve application machinery.'
      }
    ],
    sampleImages: [
      '/images/products/Artboard-5.webp',
      '/images/products/Artboard-6.webp',
      '/images/samples/packaging-sample-03.jpeg',
      '/images/samples/packaging-sample-07.jpeg'
    ]
  },
  {
    slug: 'film-printing-services',
    title: 'Film Printing Services',
    metaTitle: 'Film Printing Services | Custom Flexible Packaging Films India',
    metaDescription: 'High-quality continuous printed packaging film rolls for automated Form-Fill-Seal (FFS) flow wrap and pouch machines. Multi-layer barrier laminates with zero cylinder costs.',
    heroBadge: 'FFS Flow Wrap Ready • Multi-Layer Barrier',
    shortDescription: 'Continuous printed laminated films engineered for high-speed automated Form-Fill-Seal (FFS) packaging machines with flawless seal integrity.',
    heroImage: '/images/products/Artboard-7.webp',
    moq: 'Starting from 100 kg rolls',
    turnaround: '7 - 10 Working Days',
    overview: [
      'At Kakatiya Printers, we specialize in film printing services designed for flexible packaging that demands both strength and visual appeal. Using advanced digital and flexographic printing technologies, we produce vibrant, durable films for food, FMCG, and industrial applications — all with precise color consistency and fast turnaround times.',
      'Printed films are ideal for creating laminated pouches, wraps, and rolls that protect products while showcasing your brand beautifully. Our films support multi-layer structures, barrier coatings, and matte or glossy finishes, making them suitable for every type of automated packaging application.',
      'Engineered with controlled coefficient of friction (COF) and broad sealing temperature windows, our rolls ensure jam-free performance on horizontal flow wrappers and vertical form-fill-seal (VFFS) baggers.'
    ],
    features: [
      {
        title: 'Optimized for Automated Packaging Lines',
        description: 'Engineered slip and anti-static additives ensure smooth film tracking across forming collars at speeds exceeding 120 bags per minute.'
      },
      {
        title: 'Hermetic Heat-Seal Integrity',
        description: 'High-integrity sealant layers prevent pinholes, micro-leaks, and preserve nitrogen-flush atmospheres for extended shelf life.'
      },
      {
        title: 'Multi-Substrate Barrier Structures',
        description: 'Combines polyester, foil, metallized films, and cast polypropylene to safeguard against oxygen, moisture, and ultraviolet degradation.'
      },
      {
        title: 'Consistent Color Match Across Gang-Runs',
        description: 'Digital flexo registration maintains exact CMYK+Pantone brand colors from the first meter of the roll to the last.'
      }
    ],
    specifications: [
      { label: 'Machine Type Compatibility', value: 'Vertical Form Fill Seal (VFFS), Horizontal Flow Wrap (HFFS), Overwrapping' },
      { label: 'Web Width Capacity', value: '50mm up to 1000mm width rolls' },
      { label: 'Core Diameter', value: '76mm (3-inch) heavy duty cardboard cores' },
      { label: 'Lamination Process', value: 'Eco-friendly Solventless Lamination (zero residual solvent odor)' },
      { label: 'Barrier Structures', value: '2-Ply, 3-Ply, and 4-Ply custom engineered laminations' },
      { label: 'Print Resolution', value: 'Up to 2400 DPI photographic fidelity' }
    ],
    materials: [
      'BOPP (Clear, Matte, and Metallized)',
      'Polyester (PET) Film',
      'Cast Polypropylene (CPP)',
      'Low-Density Polyethylene (LDPE / LLDPE)',
      'Aluminum Foil Barrier',
      'Nylon (OPA) for Puncture Resistance'
    ],
    finishes: [
      'High-Gloss Laminated Finish',
      'Soft-Touch Matte Lamination',
      'Spot UV Gloss Highlights',
      'Registered Cold Seal Adhesives'
    ],
    industries: [
      {
        name: 'Food & Snacks',
        description: 'Potato chips, extruded snacks, wafers, biscuits, noodles, confectionery, and chocolates.'
      },
      {
        name: 'Staples & Grains',
        description: 'Flour (atta), rice, pulses, sugar, salt, and spices in high-barrier nitrogen-flushed rolls.'
      },
      {
        name: 'Personal Care & Wet Wipes',
        description: 'Soap single-wraps, detergent powder sachets, shampoo trial sachets, and sanitary product wrapping.'
      },
      {
        name: 'Pharma & Medical Diagnostics',
        description: 'Blister foil backing, strip packaging, ORS electrolyte sachets, and disposable medical kits.'
      }
    ],
    faqs: [
      {
        question: 'What is Form-Fill-Seal (FFS) packaging film?',
        answer: 'FFS film is continuous printed laminate supplied on a roll. Automated packaging machines pull the film over a forming tube, heat-seal the longitudinal and bottom seams, fill the product, and seal the top in one continuous automated cycle.'
      },
      {
        question: 'How do you prevent food contamination or solvent smell?',
        answer: 'We utilize solventless lamination technology and certified food-safe inks that leave absolutely zero volatile organic compounds (VOCs) or chemical odors, ensuring complete compliance with FSSAI standards.'
      },
      {
        question: 'Can you provide custom roll slit widths to fit our packing machine?',
        answer: 'Yes. Our high-precision slitter-rewinders can slit film webs accurately down to millimeter tolerances according to your machine collar dimensions.'
      }
    ],
    sampleImages: [
      '/images/products/Artboard-7.webp',
      '/images/products/Artboard-8.webp',
      '/images/samples/packaging-sample-04.jpeg',
      '/images/samples/packaging-sample-09.jpeg'
    ]
  },
  {
    slug: 'flat-bottom-pouches',
    title: 'Flat Bottom Pouches',
    metaTitle: 'Flat Bottom Pouches Printing | Box Pouches & Quad Seal Bags Hyderabad',
    metaDescription: 'Premium 5-panel flat bottom pouches and box bags with zero cylinder costs. Exceptional upright stability, pocket zippers, and high barrier protection in Hyderabad.',
    heroBadge: '5 Printable Panels • Maximum Shelf Presence',
    shortDescription: 'The pinnacle of luxury retail packaging. Five dedicated printable surfaces with unmatched upright shelf stability for coffee, dry fruits, and gourmet goods.',
    heroImage: '/images/products/Artboard-9.webp',
    moq: 'Low MOQ starting from 500 pcs',
    turnaround: '7 - 10 Working Days',
    overview: [
      'Flat Bottom Pouches (also known as Box Pouches or Quad-Seal Bags) represent the premier choice in modern flexible packaging. Engineered with a completely flat rectangular base, these pouches stand upright with exceptional structural rigidity, providing 100% shelf stability without tipping or slumping.',
      'With five distinct printable panels — front, back, bottom, left gusset, and right gusset — flat bottom pouches maximize your branding real estate, giving you ample room to showcase product imagery, origin stories, nutritional values, and brewing instructions.',
      'Kakatiya Printers manufactures flat bottom pouches with cylinder-free digital printing, meaning you can launch luxury box pouches for high-end coffees, gourmet teas, artisanal pet foods, and health supplements without steep tooling or cylinder fees.'
    ],
    features: [
      {
        title: '5 Dedicated Printable Panels',
        description: 'Utilize front, back, both side gussets, and even the underside base for complete 360-degree brand storytelling and regulatory compliance.'
      },
      {
        title: '100% Upright Structural Stability',
        description: 'The flat rectangular foot provides rock-solid balance on retail shelves, eliminating product spillage and messy displays.'
      },
      {
        title: 'Front Pocket Pull-Tab Zippers',
        description: 'Optional easy-pull zipper strips allow consumers to cleanly tear open the bag while retaining a fully resealable internal lock.'
      },
      {
        title: 'Degassing Valves for Roasted Coffee',
        description: 'One-way degassing valves release carbon dioxide from freshly roasted coffee beans while preventing oxygen ingress.'
      }
    ],
    specifications: [
      { label: 'Available Sizes', value: '100g, 250g, 500g, 1kg, 2kg, and custom volume capacities' },
      { label: 'Pouch Geometry', value: 'Flat rectangular base with four side seal edges (Quad Seal Box Pouch)' },
      { label: 'Barrier Layers', value: 'Kraft Paper + Foil + PE, Matte BOPP + AL + PE, High-Barrier Recyclable Mono-PE' },
      { label: 'Closure Options', value: 'Front Pocket Zipper, Press-To-Close Zipper, Tin-Tie Closures' },
      { label: 'Ventilation', value: 'Italian One-Way Aroma Degassing Valves for Specialty Coffee' },
      { label: 'Finishing Touches', value: 'Soft-touch velvet matte, metallic spot highlights, rounded corners' }
    ],
    materials: [
      'Natural Brown & Bleached White Kraft Paper',
      'Matte BOPP / Metallized PET / Food Poly',
      'High-Barrier Aluminum Foil Laminate',
      '100% Recyclable Mono-Material (PE/PE Structure)'
    ],
    finishes: [
      'Organic Natural Kraft Paper Texture',
      'Velveteen Soft-Touch Matte',
      'High-Gloss Radiant Polish',
      'Gold & Copper Metallic Accents'
    ],
    industries: [
      {
        name: 'Specialty Coffee & Gourmet Tea',
        description: 'Whole bean and ground coffee with one-way degassing valves, plus loose-leaf artisan teas.'
      },
      {
        name: 'Dry Fruits, Nuts & Superfoods',
        description: 'Almonds, cashews, chia seeds, quinoa, walnuts, and gourmet trail mixes.'
      },
      {
        name: 'Gourmet Pet Food & Treats',
        description: 'Premium organic dog kibble, freeze-dried meat treats, and cat wellness bites.'
      },
      {
        name: 'Artisanal Bakery & Granola',
        description: 'Organic granolas, protein muesli, cookies, luxury chocolate truffles, and specialty grains.'
      }
    ],
    faqs: [
      {
        question: 'What is the main difference between a Stand-Up Pouch and a Flat Bottom Pouch?',
        answer: 'While a stand-up pouch has a round oval bottom gusset, a flat bottom pouch features a completely flat rectangular base with four corner seals. This gives it 30% more volume capacity and significantly superior upright stability on store shelves.'
      },
      {
        question: 'Can you install one-way degassing valves for coffee?',
        answer: 'Yes! We install precision thermal one-way degassing valves that allow CO2 emitted by freshly roasted beans to escape without letting ambient oxygen into the pouch.'
      },
      {
        question: 'Do you offer pull-tab pocket zippers?',
        answer: 'Yes. Pull-tab pocket zippers allow the consumer to open the bag smoothly along a laser-scored perforated band without needing scissors, retaining a clean resealable closure.'
      }
    ],
    sampleImages: [
      '/images/products/Artboard-9.webp',
      '/images/products/Artboard-10.webp',
      '/images/samples/packaging-sample-11.jpeg',
      '/images/samples/packaging-sample-12.jpeg'
    ]
  }
];
