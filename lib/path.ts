// Helper to prefix public-asset paths with the configured basePath at build time.
// In Next.js static export, internal links to /public/* assets do NOT get the
// basePath automatically applied — so we apply it manually for any <Image>,
// <img>, <link rel="icon"> etc. that points at /public/* files.
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
