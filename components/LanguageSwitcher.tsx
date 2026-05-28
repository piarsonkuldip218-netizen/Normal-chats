"use client";

import { Globe } from "lucide-react";
import { LOCALES, useT, type Locale } from "@/lib/i18n";
import { clsx } from "clsx";

/**
 * Compact language toggle for the navbar. Shows three pill buttons
 * (EN | हिं | অস). Persists choice via the i18n provider.
 */
export default function LanguageSwitcher({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { locale, setLocale } = useT();

  return (
    <div
      role="group"
      aria-label="Language"
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border border-white/50 bg-white/40 p-0.5 backdrop-blur",
        className
      )}
    >
      {!compact && (
        <Globe size={14} className="ml-1.5 text-slate-500" aria-hidden />
      )}
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLocale(l.code as Locale)}
          aria-pressed={locale === l.code}
          aria-label={l.native}
          className={clsx(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition",
            locale === l.code
              ? "bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-soft"
              : "text-slate-600 hover:text-brand-700"
          )}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
