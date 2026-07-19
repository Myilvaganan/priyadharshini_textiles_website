// Editable marketing copy, organized by site module.
// This is the shipped/default content — the Content Management admin
// (/admin) lets an editor override it live (stored in localStorage) and
// export the merged result as JSON to replace this file for a real deploy.
export const defaultContent = {
  home: {
    hero: {
      slides: [
        {
          eyebrow: "Trusted Tape Manufacturing Since 1998",
          heading: "Weaving Trust Into Every Tape",
          quote:
            "Priyadharshini Tapes is a fully integrated B2B manufacturer of yarn, woven tape and made-up lanyards, laces and drawcords — engineered for quality, delivered at scale, trusted by global apparel and accessory brands.",
        },
        {
          eyebrow: "Precision At Every Stage",
          heading: "Quality Is Never An Accident",
          quote:
            "Every yarn, every weave, every finish — engineered with intent and inspected without compromise, so what leaves our floor is ready for the world's toughest quality checks.",
        },
        {
          eyebrow: "Craftsmanship Meets Scale",
          heading: "From Fibre to Tape, Perfected",
          quote:
            "Two decades of vertically integrated manufacturing, built to turn raw fibre into the tapes, laces and cords that leading apparel and accessory brands rely on.",
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
      body: "From a single narrow-fabric weaving unit to a vertically integrated tape manufacturing group spanning yarn, weaving, braiding, dyeing and made-ups, Priyadharshini Tapes has spent over two decades earning the trust of global brands through consistency, transparency and craftsmanship at scale.",
    },
    productsIntro: {
      heading: "Our Product Range",
      body: "From raw yarn to finished lanyards, laces and drawcords, our integrated production lines cover the full tape manufacturing chain.",
    },
    whyChooseUs: {
      heading: "Built on Reliability",
      features: [
        {
          title: "Integrated Manufacturing",
          description: "Yarn, weaving, braiding, dyeing and made-ups under one roof for tighter quality control.",
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
          description: "Needle looms and automated braiding machines for consistent, high-volume output.",
        },
        {
          title: "Sustainable Practices",
          description: "Water-efficient dyeing and energy-conscious operations across our facilities.",
        },
        {
          title: "25+ Years Experience",
          description: "A trusted manufacturing partner to global apparel and accessory brands since 1998.",
        },
      ],
    },
    facilityIntro: {
      heading: "Inside Our Facilities",
      body: "A closer look at the weaving, braiding and finishing floors that keep our production running around the clock.",
    },
    infrastructureTeaser: {
      heading: "State-of-the-Art Manufacturing Infrastructure",
      body: "Spread across a modern industrial campus with dedicated yarn, weaving, braiding, dyeing and made-ups units, purpose-built for scale and precision.",
    },
    cta: {
      heading: "Ready to Partner With Us?",
      body: "Get a quote or discuss your sourcing requirements with our export team.",
    },
  },

  about: {
    overview: {
      heading: "A Fully Integrated Tape Manufacturer",
      body: "Priyadharshini Tapes has grown from a single narrow-fabric weaving unit into a vertically integrated group spanning yarn, weaving, braiding, dyeing and made-up tapes. For over 25 years, we've supplied consistent, certified quality lanyards, laces and drawcords to apparel and accessory brands across the globe.",
      sections: [
        { title: "Our Story", description: "How a single weaving unit grew into an integrated tape manufacturing group." },
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
    emails: ["info@priyadharshinitapes.com", "exports@priyadharshinitapes.com"],
    hours: {
      weekdays: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
      sunday: "Sunday: Closed",
    },
  },

  products: [
    {
      slug: "yarn",
      name: "Yarn & Raw Cords",
      tagline: "Twisted, textured and dyed yarns engineered for tape strength",
      description:
        "Our yarn division produces polyester, nylon and cotton yarns across a wide range of deniers, twisted and textured for the strength and consistency narrow-fabric weaving and braiding demand. Every lot is tested for tenacity, elongation and twist before release.",
    },
    {
      slug: "id-card-tapes",
      name: "ID Card Tapes & Lanyards",
      tagline: "Woven and printed lanyards with clips, hooks and safety breakaways",
      description:
        "Our made-ups division converts woven tape into finished ID card lanyards and neck straps, fitted with swivel hooks, bulldog clips and safety breakaways, with woven-logo or printed branding to buyer specification.",
    },
    {
      slug: "shoelaces",
      name: "Shoelaces",
      tagline: "Flat, round and waxed laces with precision tipping",
      description:
        "Dedicated braiding and finishing lines produce flat, round and oval laces in cotton, polyester and nylon, with plastic or metal aglet tipping and tight length control for footwear brands.",
    },
    {
      slug: "hoodie-tapes",
      name: "Hoodie Drawcords",
      tagline: "Flat and tubular drawcords engineered for apparel drawstrings",
      description:
        "High-speed narrow looms and braiders produce flat woven and tubular drawcords for hoodies and activewear, finished with reinforced, heat-sealed or metal tips for reliable pull-through.",
    },
    {
      slug: "shorts-lays",
      name: "Shorts Waistband Tapes",
      tagline: "Woven and elastic waistband tapes and lays for shorts and activewear",
      description:
        "Purpose-built weaving lines produce non-elastic and elastic waistband tapes (\"lays\") engineered for stretch recovery, softness against skin and consistent width for shorts and activewear waistbands.",
    },
  ],
};

export const contentModules = [
  { key: "home", label: "Home Page" },
  { key: "about", label: "About Overview" },
  { key: "products", label: "Products" },
  { key: "contact", label: "Contact Us" },
];
