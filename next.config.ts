import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    // Pixel Glitter is a standalone static page in public/, not a React route.
    return [{ source: "/pixel", destination: "/pixel.html" }];
  },
};

export default nextConfig;
