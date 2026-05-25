"use client";

import Image from "next/image";
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
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services, clinic } from "@/lib/data";
import { asset } from "@/lib/path";

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

// Local type so we can read the optional `image` field that we just added
// to entries in lib/data.ts without retyping the whole shape.
type Service = (typeof services)[number] & { image?: string };

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
          {(services as Service[]).map((s, i) => {
            const Icon = iconMap[s.icon] ?? Sparkles;
            const wa = `https://wa.me/${clinic.contact.whatsapp}?text=${encodeURIComponent(
              `Hello TAMS Dental, I would like to know more about "${s.title}".`
            )}`;
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
                className="glass-card group relative overflow-hidden flex flex-col"
              >
                {/* Image header (or icon-only fallback if no image set) */}
                {s.image ? (
                  <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-brand-100 to-accent-400/30">
                    <Image
                      src={asset(s.image)}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/5 to-transparent" />
                    {/* Floating icon badge sits on image edge */}
                    <div className="absolute -bottom-6 left-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow ring-4 ring-white">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className={`flex-1 p-6 ${s.image ? "pt-9" : "pt-4"}`}>
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.description}
                  </p>

                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5"
                  >
                    Ask on WhatsApp
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
