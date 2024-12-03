import type { NextConfig } from "next";

const NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/blog-card',
  assetPrefix: '/blog-card',
}


export default NextConfig;
