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
            Advanced Technology
          </span>
          <h2 className="section-title mt-4">
            Modern Equipment for Better Care
          </h2>
          <p className="mt-4 text-slate-600">
            Every machine you see here is what makes our treatments faster,
            safer and more comfortable than a typical clinic. Tap any card to
            learn how it benefits you.
          </p>
        </motion.div>

        {hasContent ? (
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aiTechnology.map((t, i) => {
              const Icon = iconMap[t.icon] ?? Sparkles;
              return (
                <motion.button
                  key={t.slug}
                  type="button"
                  onClick={() => setActive(t)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: (i % 4) * 0.06,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  aria-label={`Learn more about ${t.title}`}
                  className="glass-card group relative flex flex-col overflow-hidden text-left"
                >
                  {/* Image area */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    {t.image ? (
                      <Image
                        src={asset(t.image)}
                        alt={t.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-900 via-brand-700 to-accent-600">
                        <Icon size={48} className="text-white/85" strokeWidth={1.5} />
                      </div>
                    )}
                    {t.badge && (
                      <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 shadow-soft">
                        {t.badge}
                      </div>
                    )}
                    {/* Soft white fade so image blends into card body */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/85 to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {t.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.button>
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
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur"
          >
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-700 shadow-soft backdrop-blur transition hover:bg-white"
              >
                <X size={20} />
              </button>

              {/* Image header */}
              {active.image ? (
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 sm:h-72">
                  <Image
                    src={asset(active.image)}
                    alt={active.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                  {active.badge && (
                    <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 shadow-soft">
                      {active.badge}
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid h-56 w-full place-items-center bg-gradient-to-br from-slate-900 via-brand-700 to-accent-600 sm:h-72" />
              )}

              {/* Body */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                  {active.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {active.longDescription ?? active.description}
                </p>

                {active.benefits && active.benefits.length > 0 && (
                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                      How it benefits you
                    </div>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {active.benefits.map((b) => (
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

                {/* CTAs */}
                <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-100 pt-6">
                  <a
                    href={`https://wa.me/${
                      clinic.contact.whatsapp
                    }?text=${encodeURIComponent(
                      `Hello TAMS Dental, I'd like to know more about your ${active.title} and book an appointment.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle size={18} /> Book on WhatsApp
                  </a>
                  <a
                    href={`tel:${clinic.contact.phone}`}
                    className="btn-ghost"
                  >
                    Call {clinic.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
