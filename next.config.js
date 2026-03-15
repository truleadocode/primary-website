/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression and optimization
  compress: true,
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Add empty turbopack config to allow Turbopack while keeping webpack config for compatibility
  turbopack: {},
  async headers() {
    return [
      {
        source: '/business/billing',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://buy.paddle.com https://checkout.paddle.com; frame-src 'self' https://buy.paddle.com https://checkout.paddle.com https://checkout-service.paddle.com;",
          },
        ],
      },
      // Global performance headers
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  webpack: (config, { isServer, webpack }) => {
    // Fix for webpack module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }
    
    // Optimize webpack build
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
      }
    }
    
    return config
  },
}

module.exports = nextConfig



