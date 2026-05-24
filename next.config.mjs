/** @type {import('next').NextConfig} */
// When deploying to GitHub Pages we need a basePath because the site lives at
// https://<user>.github.io/<repo>/. We toggle this with the GITHUB_PAGES env
// variable so local dev and Vercel deployments don't get the prefix.
const isGhPages = process.env.GITHUB_PAGES === "true";
const repo = "Normal-chats";
const basePath = isGhPages ? `/${repo}` : "";

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
  assetPrefix: isGhPages ? `${basePath}/` : "",
  trailingSlash: true,
  // Expose basePath to the client so we can prefix /public/* asset paths
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
