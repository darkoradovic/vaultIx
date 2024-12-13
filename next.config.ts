import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public", // Output directory for service worker
  register: true, // Automatically register service worker
  skipWaiting: true, // Activate service worker immediately
  scope: "/app",
  sw: "sw.js",
  disable: process.env.NODE_ENV === "development", // Disable in development mode
});

const nextConfig: NextConfig = withPWA({
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
});

export default nextConfig;
