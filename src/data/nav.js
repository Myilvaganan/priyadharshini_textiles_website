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
      { label: "Yarn & Raw Cords", to: "/products/yarn" },
      { label: "ID Card Tapes & Lanyards", to: "/products/id-card-tapes" },
      { label: "Shoelaces", to: "/products/shoelaces" },
      { label: "Hoodie Drawcords", to: "/products/hoodie-tapes" },
      { label: "Shorts Waistband Tapes", to: "/products/shorts-lays" },
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
