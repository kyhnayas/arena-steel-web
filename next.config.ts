import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Next.js 16 uses Turbopack by default.
  // Nodemailer is server-only (Route Handlers), no browser polyfills needed.
  turbopack: {},
};

export default nextConfig;
