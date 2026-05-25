"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from "lucide-react";
import { galleryPhotos } from "@/lib/data";
import { asset } from "@/lib/path";

export default function Gallery() {
  const hasPhotos = galleryPhotos.length > 0;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Esc closes lightbox; arrow keys navigate.
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) =>
          i === null ? null : (i + 1) % galleryPhotos.length
        );
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null
            ? null
            : (i - 1 + galleryPhotos.length) % galleryPhotos.length
        );
    };
    window.addEventListener("keydown", onKey);
    // Lock background scroll while lightbox open.
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="relative py-20 md:py-28">
      <div className="blob top-10 right-[-100px] h-80 w-80 bg-brand-300" />
      <div className="blob bottom-0 left-[-80px] h-72 w-72 bg-accent-400" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Gallery
          </span>
          <h2 className="section-title mt-4">A Look Inside TAMS Dental</h2>
          <p className="mt-4 text-slate-600">
            Take a peek at our modern clinic, advanced equipment and the
            comfortable environment we&apos;ve built for our patients.
          </p>
        </motion.div>

        {/* Masonry-style responsive grid: first card spans 2 cols on lg for visual interest */}
        {hasPhotos ? (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {galleryPhotos.map((p, i) => (
              <motion.button
                key={p.src + i}
                type="button"
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 6) * 0.05,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl glass aspect-square ${
                  i === 0 ? "col-span-2 row-span-2 aspect-[4/4] sm:aspect-square" : ""
                }`}
                aria-label={`Open photo: ${p.caption}`}
              >
                <Image
                  src={asset(p.src)}
                  alt={p.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

                {/* Category chip */}
                <div className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
                  {p.category}
                </div>

                {/* Zoom icon hint */}
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/0 text-white opacity-0 transition group-hover:bg-white/20 group-hover:opacity-100">
                  <Maximize2 size={16} />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-xs font-semibold text-white drop-shadow-md sm:text-sm">
                    {p.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          /* Empty-state placeholder shown until the clinic provides real photos. */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="glass-card relative overflow-hidden p-8 md:p-12 text-center">
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
                  <Camera size={28} strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-900 md:text-2xl">
                  Photo gallery coming soon
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  We&apos;re putting together photos of our clinic, equipment
                  and team. Drop in soon to take a closer look at TAMS Dental.
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                  ★ Updated regularly ★
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/90 p-4 backdrop-blur"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(null);
              }}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(
                  (activeIndex - 1 + galleryPhotos.length) % galleryPhotos.length
                );
              }}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:left-6"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((activeIndex + 1) % galleryPhotos.length);
              }}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25 sm:right-6"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full bg-slate-900">
                <Image
                  src={asset(galleryPhotos[activeIndex].src)}
                  alt={galleryPhotos[activeIndex].caption}
                  fill
                  sizes="(max-width: 1024px) 90vw, 1024px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/85 to-transparent p-4">
                <p className="text-sm font-semibold text-white">
                  {galleryPhotos[activeIndex].caption}
                </p>
                <p className="text-xs text-white/70">
                  {galleryPhotos[activeIndex].category} •{" "}
                  {activeIndex + 1} / {galleryPhotos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
