"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScanLine,
  Radio,
  Zap,
  Sparkles,
  Cog,
  Wrench,
  Camera,
  Activity,
  Flame,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { aiTechnology, type TechEquipment } from "@/lib/data";
import { asset } from "@/lib/path";
import { useT } from "@/lib/i18n";
import { useTech } from "@/lib/i18n-content";

const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  Radio,
  Zap,
  Sparkles,
  Camera,
  Activity,
  Flame,
  Lightbulb,
  ShieldCheck,
};

export default function Technology() {
  const { t } = useT();
  const hasContent = aiTechnology.length > 0;

  return (
    <section id="technology" className="relative py-20 md:py-28">
      <div className="blob top-10 left-[-90px] h-72 w-72 bg-accent-400" />
      <div className="blob bottom-0 right-[-80px] h-80 w-80 bg-brand-300" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            <Cog size={14} className="animate-spin-slow" />
            {t("tech.eyebrow")}
          </span>
          <h2 className="section-title mt-4">{t("tech.title")}</h2>
          <p className="mt-4 text-slate-600">{t("tech.subhead")}</p>
        </motion.div>

        {hasContent ? (
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aiTechnology.map((eq, i) => {
              const Icon = iconMap[eq.icon] ?? Sparkles;
              return (
                <TechCard
                  key={eq.slug}
                  equipment={eq}
                  index={i}
                  Icon={Icon}
                  learnMoreLabel={t("tech.learnMore")}
                />
              );
            })}
          </div>
        ) : (
          /* Empty-state placeholder — shown if the clinic hasn't yet
             provided their equipment list. */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-14 max-w-3xl"
          >
            <div className="glass-card relative overflow-hidden p-8 text-center md:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(13,148,136,0.18) 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                  maskImage:
                    "radial-gradient(ellipse at center, black, transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                  <Wrench size={28} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-900 md:text-2xl">
                  Equipment showcase coming soon
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Dr. Tabarak Hussain is finalising the list of advanced AI,
                  imaging and laser tools used at TAMS Dental.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Card subcomponent — each card is a Next.js <Link> to a dedicated
// detail page (/technology/[slug]/). We use a plain <a>-rendered Link
// (not motion.button) so navigation works reliably on every browser
// including iOS Safari, and the page is bookmarkable / shareable.
// ─────────────────────────────────────────────────────────────────────
function TechCard({
  equipment: eq,
  index: i,
  Icon,
  learnMoreLabel,
}: {
  equipment: TechEquipment;
  index: number;
  Icon: LucideIcon;
  learnMoreLabel: string;
}) {
  const copy = useTech(eq.slug);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (i % 4) * 0.06,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <Link
        href={`/technology/${eq.slug}/`}
        aria-label={`${learnMoreLabel}: ${copy.title}`}
        className="glass-card group relative flex h-full w-full flex-col overflow-hidden text-left transition active:scale-[0.99]"
        style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
      >
        {/* Image area — pointer-events-none so the image never "catches"
            the tap before the wrapping link does on iOS Safari. */}
        <div className="pointer-events-none relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-100/60">
          {eq.image ? (
            <Image
              src={asset(eq.image)}
              alt={copy.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-900 via-brand-700 to-accent-600">
              <Icon size={48} className="text-white/85" strokeWidth={1.5} />
            </div>
          )}
          {eq.badge && (
            <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 shadow-soft">
              {eq.badge}
            </div>
          )}
        </div>

        <div className="pointer-events-none flex flex-1 flex-col p-5">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
            <Icon size={20} strokeWidth={2.2} />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
            {copy.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {copy.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5">
            {learnMoreLabel} <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
