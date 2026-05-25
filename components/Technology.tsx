"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  ScanLine,
  Radio,
  Zap,
  Cpu,
  Sparkles,
  Cog,
  type LucideIcon,
} from "lucide-react";
import { aiTechnology } from "@/lib/data";
import { asset } from "@/lib/path";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  ScanLine,
  Radio,
  Zap,
  Cpu,
  Sparkles,
};

export default function Technology() {
  return (
    <section id="technology" className="relative py-20 md:py-28">
      {/* Decorative background — kept subtle so the cards stand out */}
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
            AI-Powered Dentistry, Right Here in Rangapara
          </h2>
          <p className="mt-4 text-slate-600">
            We&apos;ve invested in the same world-class technology used by top
            dental hospitals — so you get faster, more accurate and far more
            comfortable treatment than traditional clinics can offer.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiTechnology.map((t, i) => {
            const Icon = iconMap[t.icon] ?? Sparkles;
            return (
              <motion.article
                key={t.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.08,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="glass-card group relative overflow-hidden flex flex-col"
              >
                {/* Image (or gradient fallback) */}
                <div className="relative h-40 w-full overflow-hidden">
                  {t.image ? (
                    <Image
                      src={asset(t.image)}
                      alt={t.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative h-full w-full bg-gradient-to-br from-slate-900 via-brand-700 to-accent-600">
                      {/* Subtle grid pattern for tech feel when no photo */}
                      <div
                        className="absolute inset-0 opacity-25"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                          backgroundSize: "32px 32px",
                        }}
                      />
                      <div className="absolute inset-0 grid place-items-center">
                        <Icon size={56} className="text-white/85" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />

                  {/* Tech badge */}
                  {t.badge && (
                    <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 shadow-soft">
                      {t.badge}
                    </div>
                  )}

                  {/* Floating icon */}
                  <div className="absolute -bottom-6 left-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow ring-4 ring-white">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 p-6 pt-9">
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {t.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer line — adds a bit of credibility */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-slate-500"
        >
          ★ Equipment regularly serviced &amp; sterilization protocols audited ★
        </motion.p>
      </div>
    </section>
  );
}
