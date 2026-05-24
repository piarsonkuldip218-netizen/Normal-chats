"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, Clock, MapPin } from "lucide-react";
import { clinic } from "@/lib/data";

const ToothModel = dynamic(() => import("./ToothModel"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-3xl bg-gradient-to-br from-brand-200/40 to-accent-400/30" />
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

export default function Hero() {
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
            <span>{clinic.rating.score}/5 from {clinic.rating.reviews}+ Google Reviews</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl"
          >
            Your <span className="gradient-text">Healthy Smile</span><br />
            Starts at TAMS Dental
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-xl text-base text-slate-600 md:text-lg"
          >
            Modern, painless and affordable dental care in Rangapara, Sonitpur — led by{" "}
            <span className="font-semibold text-slate-800">
              Dr. Tabarak Hussain (B.D.S)
            </span>
            . From routine checkups to advanced implants, we bring expert care to your family.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a href={`tel:${clinic.contact.phone}`} className="btn-primary">
              <Phone size={18} /> Book Appointment
            </a>
            <a
              href={`https://wa.me/${clinic.contact.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20TAMS%20Dental.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <MessageCircle size={18} /> WhatsApp Us
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
            <div className="glass-card flex items-center gap-3 px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-500">Open Daily</div>
                <div className="text-sm font-semibold text-slate-800">
                  10 AM – 8 PM
                </div>
              </div>
            </div>
            <div className="glass-card flex items-center gap-3 px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-500">Visit Us</div>
                <div className="text-sm font-semibold text-slate-800">
                  Rangapara, Sonitpur
                </div>
              </div>
            </div>
            <div className="glass-card flex items-center gap-3 px-4 py-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Star size={18} />
              </div>
              <div>
                <div className="text-xs text-slate-500">Rated</div>
                <div className="text-sm font-semibold text-slate-800">
                  4.8★ on Google
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: 3D model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative h-[420px] w-full md:h-[520px] lg:h-[560px]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] glass" />
          <div className="absolute inset-0">
            <ToothModel />
          </div>

          {/* Floating mini cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-10 glass-card px-4 py-3 text-sm shadow-soft"
          >
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <div className="font-semibold text-slate-800">Painless Care</div>
            </div>
            <div className="mt-1 text-xs text-slate-500">Latest anaesthesia</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 bottom-10 glass-card px-4 py-3 text-sm shadow-soft"
          >
            <div className="flex items-center gap-2">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <div className="font-semibold text-slate-800">68+ Reviews</div>
            </div>
            <div className="mt-1 text-xs text-slate-500">Trusted by Sonitpur</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
