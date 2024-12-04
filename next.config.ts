import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static exports for production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/blog-card',
    assetPrefix: '/blog-card'
  } : {}),

  // Common settings for both development and production
  images: {
    unoptimized: true
  }
}

export default nextConfig;
