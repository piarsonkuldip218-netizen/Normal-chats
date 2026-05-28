import { aiTechnology } from "@/lib/data";
import EquipmentDetail from "./EquipmentDetail";
import { notFound } from "next/navigation";

/**
 * Pre-render one static HTML page per equipment slug at build time.
 * Required by Next.js static export (`output: "export"`).
 */
export function generateStaticParams() {
  return aiTechnology.map((eq) => ({ slug: eq.slug }));
}

// Refuse any unknown slug — keeps the static export clean.
export const dynamicParams = false;

export default function EquipmentPage({
  params,
}: {
  params: { slug: string };
}) {
  const eq = aiTechnology.find((e) => e.slug === params.slug);
  if (!eq) notFound();
  return <EquipmentDetail slug={params.slug} />;
}
