"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { clinic } from "@/lib/data";
import { useT } from "@/lib/i18n";

export default function FloatingButtons() {
  const { t } = useT();
  const wa = `https://wa.me/${clinic.contact.whatsapp}?text=Hello%20TAMS%20Dental%2C%20I%20want%20to%20book%20an%20appointment.`;

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {/* WhatsApp */}
      <motion.a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileTap={{ scale: 0.95 }}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] transition-transform hover:scale-105"
      >
        {/* Pulse ring — hidden on mobile via .floating-pulse class to save paint cost */}
        <span className="floating-pulse pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 blur-md animate-ping" />
        <MessageCircle size={26} strokeWidth={2.2} />
        <span className="pointer-events-none absolute right-[110%] whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
          {t("float.chatWhatsapp")}
        </span>
      </motion.a>

      {/* Call */}
      <motion.a
        href={`tel:${clinic.contact.phone}`}
        aria-label="Call clinic"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4 }}
        whileTap={{ scale: 0.95 }}
        className="group relative grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-5px_rgba(13,148,136,0.55)] transition-transform hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)",
        }}
      >
        <span className="floating-pulse pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand-500 opacity-50 blur-md animate-ping [animation-delay:200ms]" />
        <Phone size={24} strokeWidth={2.2} />
        <span className="pointer-events-none absolute right-[110%] whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
          {t("float.callClinic", { phone: clinic.contact.phoneDisplay })}
        </span>
      </motion.a>
    </div>
  );
}
