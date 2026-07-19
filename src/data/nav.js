export const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    dropdown: [
      { label: "Our Story", to: "/about/our-story" },
      { label: "Mission & Vision", to: "/about/mission-vision" },
      { label: "Leadership", to: "/about/leadership" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    dropdown: [
      { label: "Yarn", to: "/products/yarn" },
      { label: "Greige Fabric", to: "/products/greige-fabric" },
      { label: "Dyed & Printed Fabric", to: "/products/dyed-printed-fabric" },
      { label: "Home Textiles", to: "/products/home-textiles" },
      { label: "Technical Textiles", to: "/products/technical-textiles" },
    ],
  },
  { label: "Infrastructure", to: "/infrastructure" },
  {
    label: "Quality",
    to: "/quality",
    dropdown: [
      { label: "Certifications", to: "/quality/certifications" },
      { label: "Testing & Lab Facilities", to: "/quality/testing" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];
