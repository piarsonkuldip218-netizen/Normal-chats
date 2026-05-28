"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Phone,
  ScanLine,
  Camera,
  Radio,
  Zap,
  Activity,
  Flame,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { aiTechnology, clinic } from "@/lib/data";
import { asset } from "@/lib/path";
import { useT } from "@/lib/i18n";
import { useTech } from "@/lib/i18n-content";

const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  Camera,
  Radio,
  Zap,
  Activity,
  Flame,
  Lightbulb,
  ShieldCheck,
};

export default function EquipmentDetail({ slug }: { slug: string }) {
  const { t } = useT();
  const eq = aiTechnology.find((e) => e.slug === slug);
  const copy = useTech(slug);

  if (!eq) {
    // Should never happen because dynamicParams=false, but keep a graceful fallback.
    return null;
  }

  const Icon = iconMap[eq.icon] ?? Sparkles;

  // WhatsApp pre-filled message uses the localized title for context.
  const wa = `https://wa.me/${clinic.contact.whatsapp}?text=${encodeURIComponent(
    `Hello TAMS Dental, I'd like to know more about your ${copy.title} and book an appointment.`
  )}`;

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
        {/* Decorative background blobs (consistent with rest of site) */}
        <div className="blob top-10 right-[-100px] h-80 w-80 bg-accent-400" />
        <div className="blob bottom-0 left-[-80px] h-72 w-72 bg-brand-300" />

        <div className="relative mx-auto max-w-5xl px-4">
          {/* Back link — anchors to the Technology section on the home page */}
          <Link
            href="/#technology"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:gap-2.5"
          >
            <ArrowLeft size={16} />
            {t("tech.eyebrow")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5 grid gap-8 md:grid-cols-2 md:gap-12"
          >
            {/* Hero image card */}
            <div className="glass-card overflow-hidden">
              <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-brand-50 via-white to-accent-100/60">
                {eq.image ? (
                  <Image
                    src={asset(eq.image)}
                    alt={copy.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4"
                    priority
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-900 via-brand-700 to-accent-600">
                    <Icon
                      size={64}
                      className="text-white/85"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
                {eq.badge && (
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 shadow-soft">
                    {eq.badge}
                  </div>
                )}
              </div>
            </div>

            {/* Title + short description card */}
            <div>
              <div className="flex items-start gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                  <Icon size={26} strokeWidth={2.2} />
                </div>
                <div>
                  <h1 className="font-display text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                    {copy.title}
                  </h1>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
                {copy.description}
              </p>

              {/* Inline CTAs (hero-card primary actions) */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center sm:justify-start"
                >
                  <MessageCircle size={18} /> {t("tech.bookOnWhatsapp")}
                </a>
                <a
                  href={`tel:${clinic.contact.phone}`}
                  className="btn-ghost justify-center sm:justify-start"
                >
                  <Phone size={18} />
                  {t("tech.callButton", { phone: clinic.contact.phoneDisplay })}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Long description */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="glass-card mt-10 p-6 md:p-9"
          >
            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
              {copy.longDescription}
            </p>
          </motion.section>

          {/* Benefits list */}
          {copy.benefits.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-8 md:mt-10"
            >
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {t("tech.howItBenefits")}
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {copy.benefits.map((b) => (
                  <li
                    key={b}
                    className="water-glass flex items-start gap-3 rounded-2xl p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-brand-600"
                    />
                    <span className="text-sm leading-relaxed text-slate-700 md:text-base">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Bottom CTA panel — duplicates top CTAs after a long read */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 p-8 text-white shadow-glow md:mt-12 md:p-10"
          >
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              {copy.title}
            </h2>
            <p className="mt-2 text-white/85">{t("contact.subhead")}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-soft transition hover:-translate-y-0.5"
              >
                <MessageCircle size={18} /> {t("tech.bookOnWhatsapp")}
              </a>
              <a
                href={`tel:${clinic.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
              >
                <Phone size={18} />
                {t("tech.callButton", { phone: clinic.contact.phoneDisplay })}
              </a>
            </div>
          </motion.section>

          {/* Other equipment quick links — lets visitors hop between detail pages */}
          <section className="mt-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t("tech.eyebrow")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {aiTechnology
                .filter((other) => other.slug !== eq.slug)
                .map((other) => (
                  <OtherEquipmentChip key={other.slug} slug={other.slug} />
                ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}

function OtherEquipmentChip({ slug }: { slug: string }) {
  const copy = useTech(slug);
  return (
    <Link
      href={`/technology/${slug}/`}
      className="rounded-full glass px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 hover:text-brand-700"
    >
      {copy.title}
    </Link>
  );
}
