"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { clinic, navLinks } from "@/lib/data";
import { useT, type TKey } from "@/lib/i18n";

// Map data-driven hrefs to translation keys so adding a new locale or
// renaming a link only requires touching lib/i18n.tsx.
const navKey: Record<string, TKey> = {
  "#home": "nav.home",
  "#about": "nav.about",
  "#services": "nav.services",
  "#technology": "nav.technology",
  "#why-us": "nav.whyUs",
  "#gallery": "nav.gallery",
  "#reviews": "nav.reviews",
  "#visit": "nav.visit",
  "#contact": "nav.contact",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={clsx(
            "flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300",
            scrolled
              ? "glass shadow-soft"
              : "bg-white/30 backdrop-blur-md border border-white/40"
          )}
        >
          <a href="#home" aria-label="Home">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 hover:text-brand-700"
                >
                  {navKey[link.href] ? t(navKey[link.href]) : link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Desktop language switcher */}
            <LanguageSwitcher className="hidden md:inline-flex" />

            <a
              href={`tel:${clinic.contact.phone}`}
              className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm"
            >
              <Phone size={16} /> {t("nav.callNow")}
            </a>
            <button
              type="button"
              className="lg:hidden rounded-full p-2 text-slate-700 hover:bg-white/60"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 glass rounded-2xl p-3"
            >
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white/70 hover:text-brand-700"
                    >
                      {navKey[link.href] ? t(navKey[link.href]) : link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-3 px-2">
                  {/* Mobile language switcher */}
                  <LanguageSwitcher className="w-full justify-center" />
                </li>
                <li className="mt-2">
                  <a
                    href={`tel:${clinic.contact.phone}`}
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    <Phone size={16} /> {t("nav.callNow")}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
