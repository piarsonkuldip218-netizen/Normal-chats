import Logo from "./Logo";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { clinic, navLinks, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute -top-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600/30 via-accent-500/20 to-brand-600/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="rounded-xl bg-white/5 p-3 inline-block">
              <Logo />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Modern, painless and affordable dental care in Rangapara,
              Sonitpur — led by Dr. Tabarak Hussain (B.D.S).
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href={clinic.social.facebook} label="Facebook">
                <Facebook size={16} />
              </SocialIcon>
              <SocialIcon href={clinic.social.instagram} label="Instagram">
                <Instagram size={16} />
              </SocialIcon>
              <SocialIcon href={clinic.social.youtube} label="YouTube">
                <Youtube size={16} />
              </SocialIcon>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 transition hover:text-brand-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a
                    href="#services"
                    className="text-slate-400 transition hover:text-brand-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Reach Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-brand-400"
                />
                <span className="text-slate-400 leading-relaxed">
                  {clinic.address.full}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${clinic.contact.phone}`}
                  className="flex items-center gap-3 text-slate-400 transition hover:text-brand-300"
                >
                  <Phone size={16} className="text-brand-400" />
                  {clinic.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinic.contact.email}`}
                  className="flex items-center gap-3 text-slate-400 transition hover:text-brand-300"
                >
                  <Mail size={16} className="text-brand-400" />
                  {clinic.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.fullName}. All rights reserved.
          </p>
          <p>
            Designed with care for healthy smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-slate-300 transition hover:bg-brand-600 hover:text-white"
    >
      {children}
    </a>
  );
}
