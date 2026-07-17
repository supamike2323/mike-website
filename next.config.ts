import type { NextConfig } from "next";

// GitHub Pages serves this repo at /mike-website
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/mike-website" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  // IMPORTANT: GitHub Pages is serving flat files like about.html.
  // trailingSlash:true makes Links navigate to /about/ which 404s there.
  trailingSlash: false,
  basePath,
  assetPrefix: basePath || undefined,
  outputFileTracingRoot: __dirname,
  experimental: {
    optimizePackageImports: [
      "@fortawesome/react-fontawesome",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
};

export default nextConfig;
