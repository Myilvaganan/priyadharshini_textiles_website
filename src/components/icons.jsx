const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconSpindle = (p) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="5" rx="6" ry="2.2" />
    <ellipse cx="12" cy="19" rx="6" ry="2.2" />
    <path d="M6 5c0 4 3 5.5 3 7s-3 3-3 7M18 5c0 4-3 5.5-3 7s3 3 3 7" />
  </svg>
);

export const IconFactory = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21V10l6 4v-4l6 4v-4l6 4v7H3Z" />
    <path d="M7 21v-4M12 21v-4M17 21v-4" />
  </svg>
);

export const IconShieldCheck = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconTruck = (p) => (
  <svg {...base} {...p}>
    <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17.5" cy="18" r="1.6" />
  </svg>
);

export const IconLeaf = (p) => (
  <svg {...base} {...p}>
    <path d="M20 4C9 4 4 10 4 17c7 0 13-5 13-13Z" />
    <path d="M4 20c4-4 8-8 13-13" />
  </svg>
);

export const IconUsers = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M21 20c0-2.6-1.7-4.8-4-5.6" />
  </svg>
);

export const IconAward = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="5" />
    <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" />
  </svg>
);

export const IconFlask = (p) => (
  <svg {...base} {...p}>
    <path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconGlobe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9Z" />
  </svg>
);

export const IconBolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
  </svg>
);

export const IconWarehouse = (p) => (
  <svg {...base} {...p}>
    <path d="M3 10 12 4l9 6v10H3V10Z" />
    <path d="M8 20v-6h8v6M3 10h18" />
  </svg>
);

export const IconMapPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3h3l1.5 5L8 9.5c1 2.5 3 4.5 5.5 5.5L15 13l5 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4 6c0-1.1.9-2 2-2Z" />
  </svg>
);

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconChevronDown = (p) => (
  <svg {...base} width={16} height={16} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconChevronLeft = (p) => (
  <svg {...base} {...p}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const IconChevronRight = (p) => (
  <svg {...base} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const IconMessageCircle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8c0 1.85.68 3.55 1.83 4.95L3 21l4.5-1.2A9.7 9.7 0 0 0 12 20Z" />
  </svg>
);

export const IconSend = (p) => (
  <svg {...base} {...p}>
    <path d="m3 11 18-8-8 18-2.5-7.5L3 11Z" />
  </svg>
);

export const IconX = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
