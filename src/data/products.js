import { images } from "./images";

export const products = [
  {
    slug: "yarn",
    name: "Yarn & Raw Cords",
    tagline: "Twisted, textured and dyed yarns engineered for tape strength",
    image: images.yarnSpoolsColorful,
    gallery: [images.yarnSpoolsColorful, images.threadSpoolsWall, images.threadSpoolsClose],
    description:
      "Our yarn division produces polyester, nylon and cotton yarns across a wide range of deniers, twisted and textured for the strength and consistency narrow-fabric weaving and braiding demand. Every lot is tested for tenacity, elongation and twist before release.",
    specs: [
      { label: "Composition", value: "Polyester, Nylon, Cotton, Cotton-Poly Blends" },
      { label: "Denier Range", value: "150D – 1200D" },
      { label: "Form", value: "Cones, Hanks" },
      { label: "Applications", value: "Weaving, Braiding, Sewing Thread" },
    ],
  },
  {
    slug: "id-card-tapes",
    name: "ID Card Tapes & Lanyards",
    tagline: "Woven and printed lanyards with clips, hooks and safety breakaways",
    image: images.idCardLanyardBlank,
    gallery: [images.idCardLanyardBlank, images.sewingMachineNeedle, images.warehouseShelvingCart],
    description:
      "Our made-ups division converts woven tape into finished ID card lanyards and neck straps, fitted with swivel hooks, bulldog clips and safety breakaways, with woven-logo or printed branding to buyer specification.",
    specs: [
      { label: "Widths", value: "10mm – 25mm" },
      { label: "Attachments", value: "Swivel Hook, Bulldog Clip, Safety Breakaway" },
      { label: "Branding", value: "Woven Logo, Screen Print, Sublimation" },
      { label: "Applications", value: "Corporate, Events, Access Control" },
    ],
  },
  {
    slug: "shoelaces",
    name: "Shoelaces",
    tagline: "Flat, round and waxed laces with precision tipping",
    image: images.shoelaceCloseup,
    gallery: [images.shoelaceCloseup, images.weavingLoomColorful, images.threadsClose],
    description:
      "Dedicated braiding and finishing lines produce flat, round and oval laces in cotton, polyester and nylon, with plastic or metal aglet tipping and tight length control for footwear brands.",
    specs: [
      { label: "Types", value: "Flat, Round, Oval, Waxed" },
      { label: "Lengths", value: "27\" – 72\" (Custom)" },
      { label: "Tipping", value: "Plastic Aglets, Metal Tips" },
      { label: "Applications", value: "Athletic Footwear, Casual, Boots" },
    ],
  },
  {
    slug: "hoodie-tapes",
    name: "Hoodie Drawcords",
    tagline: "Flat and tubular drawcords engineered for apparel drawstrings",
    image: images.drawstringPouch,
    gallery: [images.drawstringPouch, images.loomMachineDetail, images.threadSpoolsSelective],
    description:
      "High-speed narrow looms and braiders produce flat woven and tubular drawcords for hoodies and activewear, finished with reinforced, heat-sealed or metal tips for reliable pull-through.",
    specs: [
      { label: "Types", value: "Flat Woven, Tubular Braided" },
      { label: "Widths", value: "5mm – 12mm" },
      { label: "Finish", value: "Heat-Sealed Tips, Metal Tips" },
      { label: "Applications", value: "Hoodies, Joggers, Activewear" },
    ],
  },
  {
    slug: "shorts-lays",
    name: "Shorts Waistband Tapes",
    tagline: "Woven and elastic waistband tapes and lays for shorts and activewear",
    image: images.fabricRollsFactory,
    gallery: [images.fabricRollsFactory, images.warehouseInterior, images.warehouseMetalShelves],
    description:
      "Purpose-built weaving lines produce non-elastic and elastic waistband tapes (\"lays\") engineered for stretch recovery, softness against skin and consistent width for shorts and activewear waistbands.",
    specs: [
      { label: "Types", value: "Woven, Knitted Elastic" },
      { label: "Widths", value: "20mm – 40mm" },
      { label: "Stretch", value: "Up to 120%" },
      { label: "Applications", value: "Shorts, Track Pants, Activewear" },
    ],
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
