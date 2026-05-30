/** @type {import('next').NextConfig} */
// Deployment targets:
//   1. Local dev / Vercel        → no prefix
//   2. GitHub Pages subdomain     → /<repo> prefix (user.github.io/Tams-dental/)
//   3. Custom domain on GH Pages  → no prefix (site lives at root of tamsdental.in)
//
// GITHUB_PAGES=true turns on the static-export prefix behaviour, but once a
// custom domain is attached the site is served from the domain root, so the
// /<repo> basePath must be DISABLED. CUSTOM_DOMAIN=true does exactly that.
const isGhPages = process.env.GITHUB_PAGES === "true";
const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const repo = "Tams-dental";
// Prefix only when on GH Pages AND not using a custom domain.
const basePath = isGhPages && !isCustomDomain ? `/${repo}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // produces a fully-static /out folder for any static host
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
  // Expose basePath to the client so we can prefix /public/* asset paths
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
