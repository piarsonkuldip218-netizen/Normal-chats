"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ShieldCheck,
  Users,
  Heart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { testimonials, clinic, type Testimonial } from "@/lib/data";

// A small palette so each patient avatar gets a stable, brand-leaning
// background colour based on the first character of their name.
const avatarPalette = [
  "from-brand-500 to-accent-500",
  "from-emerald-500 to-teal-500",
  "from-cyan-500 to-blue-500",
  "from-violet-500 to-fuchsia-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-sky-500 to-indigo-500",
  "from-lime-500 to-emerald-500",
];

function avatarColor(name: string) {
  const code = (name.charCodeAt(0) || 65) % avatarPalette.length;
  return avatarPalette[code];
}

function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      className="glass-card relative flex h-full flex-col overflow-hidden p-6"
    >
      {/* Decorative quote mark */}
      <Quote
        size={42}
        className="absolute -right-2 -top-2 text-brand-100"
        aria-hidden="true"
      />

      {/* Stars */}
      <div
        className="flex items-center gap-0.5"
        aria-label={`${t.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < t.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }
          />
        ))}
      </div>

      {/* Review text */}
      <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-slate-700">
        {t.text}
      </p>

      {/* Footer: avatar + name + date */}
      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-soft ${avatarColor(
            t.name
          )}`}
          aria-hidden="true"
        >
          {initialsOf(t.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-sm font-semibold text-slate-900">
              {t.name}
            </span>
            {t.isLocalGuide && (
              <span
                title="Google Local Guide"
                className="inline-flex items-center gap-0.5 rounded-full bg-brand-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-700"
              >
                <ShieldCheck size={9} /> Local Guide
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{t.date}</span>
            {t.treatment && (
              <>
                <span aria-hidden="true">·</span>
                <span className="truncate">{t.treatment}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  // Lead with 3 punchy reviews; rest are revealed on click. We pre-pick
  // a balanced lead (Local Guides, 5★s, varied treatments) so the
  // initial impression is strong even without expanding.
  const initialCount = 3;
  const visible = useMemo(
    () => (showAll ? testimonials : testimonials.slice(0, initialCount)),
    [showAll]
  );

  // Light stats summary — values reflect the *real* Google Business
  // Profile counts (61 of 68 are 5★, avg 4.8). We don't compute from the
  // testimonials array because we only embed a curated subset of reviews.
  const totalReviews = clinic.rating.reviews; // 68 (Google total)
  const fiveStarCount = 61; // Real 5★ count on Google
  const avgRating = clinic.rating.score.toFixed(1); // 4.8

  return (
    <section id="reviews" className="relative py-20 md:py-28">
      <div className="blob top-10 right-[-100px] h-80 w-80 bg-accent-400" />
      <div className="blob bottom-0 left-[-80px] h-72 w-72 bg-brand-300" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            <Heart size={14} className="fill-rose-500 text-rose-500" />
            Patient Stories
          </span>
          <h2 className="section-title mt-4">
            Trusted by Families Across Sonitpur
          </h2>
          <p className="mt-4 text-slate-600">
            Real, verified reviews from {clinic.rating.reviews}+ patients on
            Google. Every word below is exactly what they wrote — nothing
            edited, nothing added.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4"
        >
          <div className="water-glass rounded-2xl p-4 text-center sm:p-5">
            <div className="flex items-center justify-center gap-1">
              <span className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                {avgRating}
              </span>
              <Star
                size={18}
                className="fill-amber-400 text-amber-400 sm:hidden"
              />
              <Star
                size={22}
                className="hidden fill-amber-400 text-amber-400 sm:block"
              />
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">
              Average Google rating
            </div>
          </div>
          <div className="water-glass rounded-2xl p-4 text-center sm:p-5">
            <div className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              {fiveStarCount}
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">
              5-star reviews
            </div>
          </div>
          <div className="water-glass rounded-2xl p-4 text-center sm:p-5">
            <div className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              {clinic.rating.reviews}+
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">
              Verified reviews
            </div>
          </div>
        </motion.div>

        {/* Grid of reviews */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {visible.map((t) => (
              <TestimonialCard key={t.name + t.date} t={t} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / show less toggle */}
        {testimonials.length > initialCount && (
          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="btn-ghost"
            >
              {showAll ? (
                <>
                  Show fewer reviews <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show all {testimonials.length} reviews <ChevronDown size={16} />
                </>
              )}
            </button>

            <a
              href="https://www.google.com/search?q=TAMS+DENTAL+Dr+T+Hussain+Rangapara+Sonitpur+Assam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:gap-2"
            >
              <Users size={14} /> Check all reviews on Google →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
