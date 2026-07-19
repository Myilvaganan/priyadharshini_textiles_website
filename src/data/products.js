import { images } from "./images";

export const products = [
  {
    slug: "yarn",
    name: "Yarn",
    tagline: "Ring-spun, open-end and blended yarns for every count",
    image: images.yarnSpoolsColorful,
    gallery: [images.yarnSpoolsColorful, images.threadSpoolsWall, images.threadSpoolsClose],
    description:
      "Our spinning division produces cotton, polyester and blended yarns across a wide range of counts, engineered for consistent strength, evenness and dyeability. Every lot is tested for count, tenacity and twist before release.",
    specs: [
      { label: "Composition", value: "100% Cotton, Polyester, Cotton-Poly Blends" },
      { label: "Count Range", value: "Ne 10s – Ne 80s" },
      { label: "Form", value: "Cones, Hanks, Cheese" },
      { label: "Applications", value: "Weaving, Knitting, Sewing Thread" },
    ],
  },
  {
    slug: "greige-fabric",
    name: "Greige Fabric",
    tagline: "Unfinished woven fabric, loom-ready for downstream processing",
    image: images.fabricRollsFactory,
    gallery: [images.fabricRollsFactory, images.weavingLoomColorful, images.handLoomTopView],
    description:
      "High-volume weaving sheds run modern shuttleless looms to produce greige (unprocessed) fabric in a variety of weaves and widths, supplied to dyeing, printing and finishing partners worldwide.",
    specs: [
      { label: "Weave", value: "Plain, Twill, Sateen, Dobby" },
      { label: "Width", value: "44\" – 118\"" },
      { label: "GSM Range", value: "90 – 280" },
      { label: "Applications", value: "Apparel, Home Furnishing, Industrial" },
    ],
  },
  {
    slug: "dyed-printed-fabric",
    name: "Dyed & Printed Fabric",
    tagline: "Reactive, vat and pigment dyeing with digital and rotary printing",
    image: images.weaverLoomCloseup,
    gallery: [images.weaverLoomCloseup, images.threadsClose, images.fabricRollsFactory],
    description:
      "In-house dyeing and printing lines deliver consistent shade matching and colorfastness at scale, with reactive, vat and pigment processes plus rotary and digital printing for custom designs.",
    specs: [
      { label: "Processes", value: "Reactive, Vat, Pigment Dyeing" },
      { label: "Printing", value: "Rotary Screen, Digital" },
      { label: "Color Matching", value: "Spectrophotometer QC, Lab Dips" },
      { label: "Applications", value: "Fashion, Home Textiles, Uniforms" },
    ],
  },
  {
    slug: "home-textiles",
    name: "Home Textiles",
    tagline: "Bedding, upholstery and made-up furnishing fabrics",
    image: images.warehouseShelvingCart,
    gallery: [images.warehouseShelvingCart, images.fabricRollsFactory, images.warehouseInterior],
    description:
      "A dedicated made-ups division converts finished fabric into bedsheets, curtains, cushion covers and upholstery textiles, produced to buyer specification with full cut-and-sew capability.",
    specs: [
      { label: "Product Types", value: "Bedsheets, Curtains, Cushion Covers, Upholstery" },
      { label: "Fabric", value: "Cotton, Cotton-Blend, Poly-Cotton" },
      { label: "Finishing", value: "Sanforized, Mercerized, Easy-Care" },
      { label: "Applications", value: "Retail, Hospitality, Export" },
    ],
  },
  {
    slug: "technical-textiles",
    name: "Technical Textiles",
    tagline: "Engineered fabrics for industrial and performance applications",
    image: images.industrialWorkers,
    gallery: [images.industrialWorkers, images.warehouseSteel, images.warehouseMetalShelves],
    description:
      "Beyond apparel, our technical textiles line supplies coated, laminated and non-woven fabrics engineered for filtration, geotextile, automotive and packaging applications.",
    specs: [
      { label: "Types", value: "Coated, Laminated, Non-Woven" },
      { label: "Testing", value: "Tensile, Abrasion, Flame Retardancy" },
      { label: "Applications", value: "Filtration, Automotive, Geotextile, Packaging" },
      { label: "Certifications", value: "ISO 9001, Oeko-Tex Standard 100" },
    ],
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
