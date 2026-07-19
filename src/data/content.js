// Editable marketing copy, organized by site module.
// This is the shipped/default content — the Content Management admin
// (/admin) lets an editor override it live (stored in localStorage) and
// export the merged result as JSON to replace this file for a real deploy.
export const defaultContent = {
  home: {
    hero: {
      slides: [
        {
          eyebrow: "Trusted Textile Manufacturing Since 1998",
          heading: "Weaving Trust Into Every Thread",
          quote:
            "Priyadharshini Textiles is a fully integrated B2B manufacturer of yarn, woven fabric and made-up textiles — engineered for quality, delivered at scale, trusted by global apparel and home furnishing brands.",
        },
        {
          eyebrow: "Precision At Every Stage",
          heading: "Quality Is Never An Accident",
          quote:
            "Every yarn, every weave, every finish — engineered with intent and inspected without compromise, so what leaves our floor is ready for the world's toughest quality checks.",
        },
        {
          eyebrow: "Craftsmanship Meets Scale",
          heading: "From Fibre to Fabric, Perfected",
          quote:
            "Two decades of vertically integrated manufacturing, built to turn raw fibre into the fabric that leading apparel and home textile brands rely on.",
        },
        {
          eyebrow: "Global Reach, Local Craft",
          heading: "Trusted By Brands In 40+ Countries",
          quote:
            "Reliable exports, consistent quality and on-time delivery — the foundation of every partnership we build, shipment after shipment.",
        },
      ],
    },
    stats: [
      { value: 25, suffix: "+", label: "Years of Experience" },
      { value: 40, suffix: "+", label: "Export Countries" },
      { value: 3200, suffix: "+", label: "Employees" },
      { value: 12, suffix: "M", label: "Meters / Month" },
    ],
    aboutTeaser: {
      heading: "A Legacy of Craftsmanship, Built for Modern Manufacturing",
      body: "From a single weaving unit to a vertically integrated textile group spanning spinning, weaving, processing and made-ups, Priyadharshini Textiles has spent over two decades earning the trust of global brands through consistency, transparency and craftsmanship at scale.",
    },
    productsIntro: {
      heading: "Our Product Range",
      body: "From raw yarn to finished made-up textiles, our integrated production lines cover the full manufacturing chain.",
    },
    whyChooseUs: {
      heading: "Built on Reliability",
      features: [
        {
          title: "Integrated Manufacturing",
          description: "Spinning, weaving, processing and made-ups under one roof for tighter quality control.",
        },
        {
          title: "Certified Quality",
          description: "ISO 9001, Oeko-Tex and GOTS certified processes across every production stage.",
        },
        {
          title: "Reliable Logistics",
          description: "On-time delivery to over 40 countries backed by dedicated export operations.",
        },
        {
          title: "Modern Machinery",
          description: "Shuttleless looms and automated spinning frames for consistent, high-volume output.",
        },
        {
          title: "Sustainable Practices",
          description: "Water-efficient dyeing and energy-conscious operations across our facilities.",
        },
        {
          title: "25+ Years Experience",
          description: "A trusted manufacturing partner to global apparel and home textile brands since 1998.",
        },
      ],
    },
    facilityIntro: {
      heading: "Inside Our Facilities",
      body: "A closer look at the spinning, weaving and finishing floors that keep our production running around the clock.",
    },
    infrastructureTeaser: {
      heading: "State-of-the-Art Manufacturing Infrastructure",
      body: "Spread across a modern industrial campus with dedicated spinning, weaving, processing and warehousing units, purpose-built for scale and precision.",
    },
    cta: {
      heading: "Ready to Partner With Us?",
      body: "Get a quote or discuss your sourcing requirements with our export team.",
    },
  },

  about: {
    overview: {
      heading: "A Fully Integrated Textile Manufacturer",
      body: "Priyadharshini Textiles has grown from a single weaving unit into a vertically integrated group spanning spinning, weaving, processing and made-up textiles. For over 25 years, we've supplied consistent, certified quality fabric and yarn to apparel and home furnishing brands across the globe.",
      sections: [
        { title: "Our Story", description: "How a single weaving unit grew into an integrated textile group." },
        { title: "Mission & Vision", description: "The purpose and values that guide every decision we make." },
        { title: "Leadership", description: "Meet the team leading our manufacturing and export operations." },
      ],
    },
  },

  contact: {
    intro: {
      heading: "Send Us an Enquiry",
      body: "Fill in your requirements and our export team will get back to you within 24 hours.",
    },
    address: "SIPCOT Industrial Complex, Perundurai, Erode, Tamil Nadu 638052, India",
    phones: ["+91 424 267 1234", "+91 98765 43210"],
    emails: ["info@priyadharshinitextiles.com", "exports@priyadharshinitextiles.com"],
    hours: {
      weekdays: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
      sunday: "Sunday: Closed",
    },
  },

  products: [
    {
      slug: "yarn",
      name: "Yarn",
      tagline: "Ring-spun, open-end and blended yarns for every count",
      description:
        "Our spinning division produces cotton, polyester and blended yarns across a wide range of counts, engineered for consistent strength, evenness and dyeability. Every lot is tested for count, tenacity and twist before release.",
    },
    {
      slug: "greige-fabric",
      name: "Greige Fabric",
      tagline: "Unfinished woven fabric, loom-ready for downstream processing",
      description:
        "High-volume weaving sheds run modern shuttleless looms to produce greige (unprocessed) fabric in a variety of weaves and widths, supplied to dyeing, printing and finishing partners worldwide.",
    },
    {
      slug: "dyed-printed-fabric",
      name: "Dyed & Printed Fabric",
      tagline: "Reactive, vat and pigment dyeing with digital and rotary printing",
      description:
        "In-house dyeing and printing lines deliver consistent shade matching and colorfastness at scale, with reactive, vat and pigment processes plus rotary and digital printing for custom designs.",
    },
    {
      slug: "home-textiles",
      name: "Home Textiles",
      tagline: "Bedding, upholstery and made-up furnishing fabrics",
      description:
        "A dedicated made-ups division converts finished fabric into bedsheets, curtains, cushion covers and upholstery textiles, produced to buyer specification with full cut-and-sew capability.",
    },
    {
      slug: "technical-textiles",
      name: "Technical Textiles",
      tagline: "Engineered fabrics for industrial and performance applications",
      description:
        "Beyond apparel, our technical textiles line supplies coated, laminated and non-woven fabrics engineered for filtration, geotextile, automotive and packaging applications.",
    },
  ],
};

export const contentModules = [
  { key: "home", label: "Home Page" },
  { key: "about", label: "About Overview" },
  { key: "products", label: "Products" },
  { key: "contact", label: "Contact Us" },
];
