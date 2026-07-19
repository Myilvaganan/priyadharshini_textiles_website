import { Link } from "react-router-dom";
import Logo from "./Logo";
import { navLinks } from "../data/nav";
import { products } from "../data/products";
import { IconMapPin, IconPhone, IconMail } from "./icons";

const socials = [
  { label: "LinkedIn", letter: "in" },
  { label: "Facebook", letter: "f" },
  { label: "Instagram", letter: "ig" },
];

export default function Footer() {
  const quickLinks = navLinks.flatMap((l) => (l.dropdown ? [] : [l]));

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Weaving trust into every thread — a fully integrated B2B textile manufacturer
            serving apparel, home furnishing and technical textile brands worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-xs font-semibold uppercase text-white/80 transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                {s.letter}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-brand-gold-light">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition-colors hover:text-brand-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-brand-gold-light">Products</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {products.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="transition-colors hover:text-brand-gold">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-brand-gold-light">Contact Info</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>SIPCOT Industrial Complex, Perundurai, Erode, Tamil Nadu 638052, India</span>
            </li>
            <li className="flex gap-3">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>+91 424 267 1234</span>
            </li>
            <li className="flex gap-3">
              <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
              <span>info@priyadharshinitextiles.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Priyadharshini Textiles. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-brand-gold">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
