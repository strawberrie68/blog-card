import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/blog-card',
  assetPrefix: '/blog-card',
}


export default nextConfig;
