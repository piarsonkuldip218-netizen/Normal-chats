"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, Clock, MapPin } from "lucide-react";
import { clinic } from "@/lib/data";
import { asset } from "@/lib/path";
import { useT } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
  const { t } = useT();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Background blobs */}
      <div className="blob top-[-120px] left-[-80px] h-[420px] w-[420px] bg-brand-300" />
      <div className="blob bottom-[-100px] right-[-60px] h-[380px] w-[380px] bg-accent-400" />
      <div className="absolute inset-0 -z-10 bg-hero-pattern" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        {/* Left content */}
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-brand-700"
          >
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>
              {t("hero.reviewsBadge", {
                score: clinic.rating.score,
                reviews: clinic.rating.reviews,
              })}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl"
          >
            {t("hero.headlinePart1")}{" "}
            <span className="gradient-text">{t("hero.headlineEmphasis")}</span>
            <br />
            {t("hero.headlinePart2")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-xl text-base text-slate-600 md:text-lg"
          >
            {t("hero.subhead", {
              doctor: `${clinic.doctor.name} (${clinic.doctor.qualification})`,
            })}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a href={`tel:${clinic.contact.phone}`} className="btn-primary">
              <Phone size={18} /> {t("hero.bookAppointment")}
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20TAMS%20Dental.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={18} /> {t("hero.whatsappUs")}
            </a>
          </motion.div>

          {/* Quick info chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <div className="water-glass flex items-center gap-3 rounded-2xl px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-500">{t("hero.openDaily")}</div>
                <div className="text-sm font-semibold text-slate-800">
                  {t("hero.hoursValue")}
                </div>
              </div>
            </div>
            <div className="water-glass flex items-center gap-3 rounded-2xl px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-500">{t("hero.visitUs")}</div>
                <div className="text-sm font-semibold text-slate-800">
                  {t("hero.locationValue")}
                </div>
              </div>
            </div>
            <div className="water-glass flex items-center gap-3 rounded-2xl px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Star size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-500">{t("hero.rated")}</div>
                <div className="text-sm font-semibold text-slate-800">
                  {t("hero.ratedValue")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: clinic team photo (doctor + staff) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative w-full"
        >
          {/* Glass frame wrapping the photo — matches the site's
              glassmorphism style. The photo is 4:3 landscape, so we use a
              matching aspect ratio with object-cover: full team visible,
              no stretching, sharp on every screen size. */}
          <div className="relative overflow-hidden rounded-[2rem] glass p-2.5 sm:p-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand-100 to-accent-400/40">
              <Image
                src={asset("/team.jpg")}
                alt={`${clinic.doctor.name} and the TAMS Dental team`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              {/* Subtle bottom gradient so the floating badge text stays
                  readable over bright parts of the photo. */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating mini cards — same tactile water-glass style as before. */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-3 top-6 water-glass rounded-2xl px-4 py-3 text-sm sm:left-4 sm:top-10"
          >
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <div className="font-semibold text-slate-800">
                {t("hero.teamBadge")}
              </div>
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {t("hero.teamBadgeSub")}
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-3 bottom-6 water-glass rounded-2xl px-4 py-3 text-sm sm:right-4 sm:bottom-10"
          >
            <div className="flex items-center gap-2">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <div className="font-semibold text-slate-800">
                {t("hero.reviewsCount")}
              </div>
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {t("hero.trustedBy")}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
