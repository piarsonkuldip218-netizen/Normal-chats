"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  ScanLine,
  Radio,
  Zap,
  Cpu,
  Sparkles,
  Cog,
  Wrench,
  Camera,
  Activity,
  Flame,
  Lightbulb,
  ShieldCheck,
  X,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { aiTechnology, clinic, type TechEquipment } from "@/lib/data";
import { asset } from "@/lib/path";
import { useT } from "@/lib/i18n";
import { useTech } from "@/lib/i18n-content";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  ScanLine,
  Radio,
  Zap,
  Cpu,
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
  const [active, setActive] = useState<TechEquipment | null>(null);

  // Lock background scroll + close on Escape while modal is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

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
                  onSelect={() => setActive(eq)}
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

      {/* Equipment detail modal */}
      <AnimatePresence>
        {active && <TechModal active={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Card subcomponent — uses useTech() to get translated copy for the
// active locale. Kept separate from <Technology> so the parent can
// safely use `useT()` (whose `t` would otherwise collide with the
// iteration variable).
// ─────────────────────────────────────────────────────────────────────
function TechCard({
  equipment: eq,
  index: i,
  Icon,
  learnMoreLabel,
  onSelect,
}: {
  equipment: TechEquipment;
  index: number;
  Icon: LucideIcon;
  learnMoreLabel: string;
  onSelect: () => void;
}) {
  const copy = useTech(eq.slug);
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (i % 4) * 0.06,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      aria-label={`${learnMoreLabel}: ${copy.title}`}
      className="glass-card group relative flex flex-col overflow-hidden text-left"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-100/60">
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

      <div className="flex flex-1 flex-col p-5">
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
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Modal subcomponent — shows the long description + benefits list +
// CTAs. Pulls translated copy via useTech().
// ─────────────────────────────────────────────────────────────────────
function TechModal({
  active,
  onClose,
}: {
  active: TechEquipment;
  onClose: () => void;
}) {
  const { t } = useT();
  const copy = useTech(active.slug);
  return (
    /* Outer overlay = the only scroll container. Uses overflow-y-auto +
       a flex wrapper so on mobile (where content is taller than the
       viewport) the modal scrolls from the top, while on larger screens
       it centers vertically. Avoids the `grid place-items-center +
       my-auto` pattern that was clipping the top of the modal on small
       phones. */
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-slate-950/85 backdrop-blur"
    >
      {/* Close button is anchored to the viewport (not the modal card)
          so it remains tappable even after the user scrolls within a
          long modal on mobile. */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="fixed right-3 top-3 z-[70] grid h-11 w-11 place-items-center rounded-full bg-white/95 text-slate-800 shadow-soft backdrop-blur transition hover:bg-white sm:right-4 sm:top-4"
        style={{ marginTop: "env(safe-area-inset-top)" }}
      >
        <X size={20} />
      </button>

      <div className="flex min-h-full w-full items-start justify-center p-3 sm:items-center sm:p-6">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
        >
          {/* Image header — fixed pixel heights instead of aspect ratios
              so the image never dominates the viewport on mobile. The
              equipment is shown with object-contain so its full shape is
              always visible. */}
          {active.image ? (
            <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-100/60 sm:h-72 md:h-80">
              <Image
                src={asset(active.image)}
                alt={copy.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain p-4"
                priority
              />
              {active.badge && (
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 shadow-soft">
                  {active.badge}
                </div>
              )}
            </div>
          ) : (
            <div className="grid h-44 w-full place-items-center bg-gradient-to-br from-slate-900 via-brand-700 to-accent-600 sm:h-64" />
          )}

          {/* Body — responsive padding so the content has breathing room
              on small phones without wasting space on desktop. */}
          <div className="p-5 sm:p-7 md:p-8">
            <h3 className="font-display text-xl font-bold leading-tight text-slate-900 sm:text-2xl md:text-3xl">
              {copy.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
              {copy.longDescription}
            </p>

            {copy.benefits.length > 0 && (
              <div className="mt-5 sm:mt-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700 sm:text-xs">
                  {t("tech.howItBenefits")}
                </div>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {copy.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-600"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs stack on mobile so each is a comfortable tap target,
                row-wrap on larger screens. */}
            <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:mt-7 sm:flex-row sm:flex-wrap sm:pt-6">
              <a
                href={`https://wa.me/${
                  clinic.contact.whatsapp
                }?text=${encodeURIComponent(
                  `Hello TAMS Dental, I'd like to know more about your ${copy.title} and book an appointment.`
                )}`}
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
                {t("tech.callButton", { phone: clinic.contact.phoneDisplay })}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
