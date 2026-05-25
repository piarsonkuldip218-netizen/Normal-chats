"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Stethoscope } from "lucide-react";
import { clinic } from "@/lib/data";
import { asset } from "@/lib/path";

const stats = [
  { icon: Users, value: "1000+", label: "Happy Patients" },
  { icon: Stethoscope, value: "9+", label: "Services Offered" },
  { icon: Award, value: "4.8★", label: "Google Rating" },
  { icon: GraduationCap, value: "B.D.S", label: "Qualified Dentist" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="blob top-10 left-[-100px] h-80 w-80 bg-brand-300" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        {/* Doctor image card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-[2rem] glass p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-100 to-accent-400/40">
              {/* Replace /doctor.jpg with the real photo when available */}
              <Image
                src={asset("/doctor.jpg")}
                alt={`${clinic.doctor.name} - ${clinic.doctor.qualification}`}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
                priority={false}
              />
              {/* Fallback overlay shimmer (visible if image missing) */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-700/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card flex items-center gap-3 px-5 py-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">
                  {clinic.doctor.name}
                </div>
                <div className="text-xs text-slate-500">
                  {clinic.doctor.qualification} · {clinic.doctor.title}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative ring */}
          <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full border-4 border-dashed border-brand-300/60 animate-spin-slow" />
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            About Us
          </span>
          <h2 className="section-title mt-4">
            Compassionate Care, Modern Dentistry
          </h2>
          <p className="mt-4 text-base font-medium text-slate-700">
            {clinic.doctor.bio}
          </p>
          <p className="mt-3 text-base font-medium text-slate-700">
            At <span className="font-bold text-slate-900">{clinic.fullName}</span>, we
            combine the latest dental technology with a warm, family-friendly
            environment. Whether it&apos;s your child&apos;s first visit or a
            complex implant procedure, you can expect honest advice, transparent
            pricing and gentle hands.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="water-glass rounded-2xl p-4 text-center"
              >
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={18} />
                </div>
                <div className="mt-2 font-display text-xl font-bold text-slate-900">
                  {value}
                </div>
                <div className="text-xs font-semibold text-slate-600">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
