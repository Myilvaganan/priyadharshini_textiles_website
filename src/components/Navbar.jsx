import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import ScrollProgressBar from "./ScrollProgressBar";
import { navLinks } from "../data/nav";
import { IconChevronDown } from "./icons";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
            >
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? "text-brand-gold" : "text-white hover:text-brand-gold-light"
                  }`
                }
              >
                {link.label}
                {link.dropdown && (
                  <IconChevronDown
                    className={`mt-px transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </NavLink>

              {link.dropdown && (
                <div
                  className={`absolute left-0 top-full min-w-[220px] origin-top rounded-b-md bg-brand-green shadow-xl transition-all duration-200 ease-out ${
                    openDropdown === link.label
                      ? "visible translate-y-0 scale-y-100 opacity-100"
                      : "invisible -translate-y-1 scale-y-95 opacity-0"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white/90 transition-colors duration-150 hover:bg-brand-dark hover:text-brand-gold-light ${
                          isActive ? "text-brand-gold-light" : ""
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary" className="!px-5 !py-2.5 text-xs">
            Enquiry
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <ScrollProgressBar />

      <div
        className={`grid bg-brand-dark transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          mobileOpen
            ? "grid-rows-[1fr] border-t border-white/10"
            : "grid-rows-[0fr] border-t border-transparent"
        }`}
      >
        <div className="overflow-hidden px-4">
          <div className="pb-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => !link.dropdown && setMobileOpen(false)}
                    className="flex-1 py-3 text-xs font-semibold uppercase tracking-widest text-white"
                  >
                    {link.label}
                  </NavLink>
                  {link.dropdown && (
                    <button
                      type="button"
                      className="p-3 text-white"
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                      }
                    >
                      <IconChevronDown
                        className={`transition-transform duration-200 ${mobileDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && (
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      mobileDropdown === link.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-2 pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-xs font-medium uppercase tracking-wide text-white/80"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button to="/contact" variant="primary" onClick={() => setMobileOpen(false)}>
                Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
