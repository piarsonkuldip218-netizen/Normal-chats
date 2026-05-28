"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useState, type FormEvent } from "react";
import { clinic } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function Contact() {
  const { t } = useT();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const service = String(form.get("service") || "General Consultation");
    const message = String(form.get("message") || "");

    const text = encodeURIComponent(
      `Hello TAMS Dental,%0A%0AI'd like to book an appointment.%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`
    );
    // Open WhatsApp with prefilled message
    window.open(
      `https://wa.me/${clinic.contact.whatsapp}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="blob top-0 left-1/2 h-96 w-96 -translate-x-1/2 bg-accent-400/40" />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            {t("contact.eyebrow")}
          </span>
          <h2 className="section-title mt-4">{t("contact.title")}</h2>
          <p className="mt-4 text-slate-600">
            {t("contact.subhead")}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`tel:${clinic.contact.phone}`}
              className="water-glass flex items-start gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Call Us
                </div>
                <div className="mt-1 font-semibold text-slate-900">
                  {clinic.contact.phoneDisplay}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Tap to dial directly
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${clinic.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="water-glass flex items-start gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-500 text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  WhatsApp
                </div>
                <div className="mt-1 font-semibold text-slate-900">
                  Chat with us instantly
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Quick replies during clinic hours
                </div>
              </div>
            </a>

            <div className="water-glass flex items-start gap-4 rounded-2xl p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Address
                </div>
                <div className="mt-1 text-sm font-medium text-slate-900 leading-relaxed">
                  {clinic.address.line1},<br />
                  {clinic.address.line2},<br />
                  {clinic.address.line3},<br />
                  {clinic.address.city}, {clinic.address.state} -{" "}
                  {clinic.address.pincode}
                </div>
              </div>
            </div>

            <div className="water-glass flex items-start gap-4 rounded-2xl p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  Working Hours
                </div>
                <div className="mt-1 text-sm font-medium text-slate-900">
                  Open all 7 days
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  10:00 AM – 8:00 PM
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <form
              onSubmit={onSubmit}
              className="glass-card p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  name="name"
                  label="Your Name"
                  placeholder="Full name"
                  required
                />
                <Field
                  name="phone"
                  label="Phone Number"
                  placeholder="+91 ..."
                  type="tel"
                  required
                />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Service
                  </label>
                  <select
                    name="service"
                    defaultValue="General Consultation"
                    className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  >
                    <option>General Consultation</option>
                    <option>Cleaning &amp; Polishing</option>
                    <option>Root Canal Treatment</option>
                    <option>Tooth Extraction</option>
                    <option>Dental Implants</option>
                    <option>Braces / Orthodontics</option>
                    <option>Teeth Whitening</option>
                    <option>Crowns &amp; Bridges</option>
                    <option>Kids Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us briefly about your concern…"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Submitting will open WhatsApp with your details pre-filled.
                </p>
                <button type="submit" className="btn-primary">
                  <Send size={16} /> Send via WhatsApp
                </button>
              </div>
              {submitted && (
                <div className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  ✓ Opening WhatsApp… we&apos;ll get back to you shortly.
                </div>
              )}
            </form>

            {/* Map */}
            <div className="glass-card overflow-hidden">
              <iframe
                title="TAMS Dental Clinic Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  clinic.address.mapsQuery
                )}&output=embed`}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
