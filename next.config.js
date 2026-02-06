/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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



