import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    // "Digital" was renamed to "Design".
    return [
      { source: "/digital", destination: "/design", permanent: true },
      { source: "/digital/:slug", destination: "/design/:slug", permanent: true },
      // "Resume" was renamed to "CV".
      { source: "/resume", destination: "/cv", permanent: true },
    ];
  },
  async rewrites() {
    // Pixel Glitter is a standalone static page in public/, not a React route.
    return [{ source: "/pixel", destination: "/pixel.html" }];
  },
};

export default nextConfig;
