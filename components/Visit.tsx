"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Clock,
  Navigation,
  Star,
  Phone,
} from "lucide-react";
import { clinic, clinicPhoto } from "@/lib/data";
import { asset } from "@/lib/path";
import { useT } from "@/lib/i18n";

export default function Visit() {
  const { t } = useT();
  // Direct link that opens Google Maps with the clinic location selected.
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    clinic.address.mapsQuery
  )}`;

  return (
    <section id="visit" className="relative py-20 md:py-28">
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
            {t("visit.eyebrow")}
          </span>
          <h2 className="section-title mt-4">
            {t("visit.title")}
          </h2>
          <p className="mt-4 text-slate-600">
            {t("visit.subhead")}
          </p>
        </motion.div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          {/* Clinic photo with glass frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] glass p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 to-accent-400/40">
                {clinicPhoto.front ? (
                  <Image
                    src={asset(clinicPhoto.front)}
                    alt={`${clinic.fullName} clinic front view`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center"
                  />
                ) : (
                  /* Polished placeholder while the photo isn't uploaded yet */
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-white/60 text-brand-600 shadow-soft backdrop-blur">
                        <Building2 size={36} strokeWidth={1.5} />
                      </div>
                      <p className="mt-4 text-sm font-medium text-brand-700/80">
                        {t("visit.photoSoon")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating rating badge — sits half-overlap on the photo */}
            <div className="absolute -bottom-4 left-6 flex items-center gap-2 water-glass rounded-2xl px-4 py-2.5">
              <Star
                size={16}
                className="fill-amber-400 text-amber-400"
              />
              <span className="text-sm font-bold text-slate-900">
                {clinic.rating.score}
              </span>
              <span className="text-xs text-slate-500">
                {t("visit.reviewsSuffix", { reviews: clinic.rating.reviews })}
              </span>
            </div>

            {/* Decorative dashed ring (matches About section style) */}
            <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full border-4 border-dashed border-brand-300/60 animate-spin-slow" />
          </motion.div>

          {/* Right info card with directions CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="water-glass rounded-3xl p-7 md:p-9"
          >
            <h3 className="font-display text-2xl font-bold text-slate-900">
              {clinic.fullName}
            </h3>
            <p className="mt-1.5 text-sm text-slate-500">{clinic.tagline}</p>

            <div className="mt-7 space-y-5">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t("visit.address")}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-slate-700">
                    {clinic.address.line1},<br />
                    {clinic.address.line2},<br />
                    {clinic.address.line3},<br />
                    {clinic.address.city}, {clinic.address.state} -{" "}
                    {clinic.address.pincode}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t("visit.hours")}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {t("visit.openAllDays")}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t("visit.hoursValue")}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation size={18} /> {t("visit.getDirections")}
              </a>
              <a
                href={`tel:${clinic.contact.phone}`}
                className="btn-ghost"
              >
                <Phone size={18} /> {t("visit.callClinic")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
