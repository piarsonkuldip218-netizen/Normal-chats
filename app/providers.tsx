"use client";

import { LanguageProvider } from "@/lib/i18n";
import type { ReactNode } from "react";

/**
 * Client-only provider wrapper. Kept separate from app/layout.tsx so
 * the layout itself can stay a server component (good for streaming +
 * static export).
 */
export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
