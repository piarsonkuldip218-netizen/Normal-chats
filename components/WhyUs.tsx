"use client";

import { motion } from "framer-motion";
import {
  Star,
  Cpu,
  HeartPulse,
  Wallet,
  Clock,
  Users,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/data";
import { useT } from "@/lib/i18n";
import { useFeature } from "@/lib/i18n-content";

const iconMap: Record<string, LucideIcon> = {
  Star,
  Cpu,
  HeartPulse,
  Wallet,
  Clock,
  Users,
};

export default function WhyUs() {
  const { t } = useT();
  return (
    <section
      id="why-us"
      className="relative py-20 md:py-28"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600" />
        <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="absolute inset-0" style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center text-white"
        >
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            {t("why.eyebrow")}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            {t("why.titleLine1")} <br className="hidden sm:block" />
            {t("why.titleLine2")}
          </h2>
          <p className="mt-4 text-white/85">
            {t("why.subhead")}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] ?? Star;
            return (
              <FeatureCard key={f.title} index={i} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ index: i, Icon }: { index: number; Icon: LucideIcon }) {
  const copy = useFeature(i);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (i % 3) * 0.08,
      }}
      className="glass-dark rounded-2xl p-6 transition hover:bg-white/15"
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">
        {copy.title}
      </h3>
      <p className="mt-2 text-sm text-white/80">{copy.description}</p>
    </motion.div>
  );
}
