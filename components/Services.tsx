"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Activity,
  Minus,
  Anchor,
  AlignCenter,
  Sparkles,
  Crown,
  Baby,
  Smile,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Activity,
  Minus,
  Anchor,
  AlignCenter,
  Sparkles,
  Crown,
  Baby,
  Smile,
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="blob top-20 right-[-100px] h-80 w-80 bg-accent-400" />
      <div className="blob bottom-10 left-[-80px] h-72 w-72 bg-brand-300" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Our Services
          </span>
          <h2 className="section-title mt-4">
            Complete Dental Care Under One Roof
          </h2>
          <p className="mt-4 text-slate-600">
            From routine cleanings to advanced cosmetic procedures — we offer the
            full spectrum of modern dentistry with the latest equipment and
            techniques.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            return (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.08,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="glass-card group relative overflow-hidden p-6"
              >
                {/* Decorative gradient blob inside card */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-200/60 to-accent-400/40 blur-2xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
