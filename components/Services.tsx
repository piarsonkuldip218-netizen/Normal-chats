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
import { useT } from "@/lib/i18n";

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
  const { t } = useT();
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
            {t("services.eyebrow")}
          </span>
          <h2 className="section-title mt-4">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-slate-600">
            {t("services.subhead")}
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
                {/* Image header — left fully visible (no dark overlay, no
                    icon badge on top) so the photo isn't obstructed. */}
                {s.image && (
                  /* Taller aspect-ratio container + object-contain so the
                     entire treatment photo is always visible — even when
                     the source image is portrait. The brand-tinted gradient
                     backdrop fills any letterboxed space cleanly. */
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-100/60">
                    <Image
                      src={asset(s.image)}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                {/* Body — icon now lives here (not on top of the image),
                    and text uses bolder weights for stronger hierarchy. */}
                <div className="flex-1 p-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-glow">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
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
