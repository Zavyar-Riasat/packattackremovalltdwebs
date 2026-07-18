import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [412, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    qualities: [75, 80], // Allow both 75 and 80 quality values
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
  productionBrowserSourceMaps: false,
  // Turbopack specific settings (if using Next.js 15+ with Turbopack)
  turbopack: {
    // Optimize images in Turbopack
    resolveAlias: {
      // Any custom aliases if needed
    },
  },
};

export default nextConfig;