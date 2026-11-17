/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kakatiyaprinters.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/documents/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 1. Normalize legacy /about to /about-us
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      
      // 2. Services Legacy Root Permalinks -> Structured /services/*
      {
        source: '/pouch-printing-without-cylinder',
        destination: '/services/pouch-printing-without-cylinder',
        permanent: true,
      },
      {
        source: '/roll-form-label-printing',
        destination: '/services/roll-form-label-printing',
        permanent: true,
      },
      {
        source: '/shrink-sleeves-printing',
        destination: '/services/shrink-sleeves-printing',
        permanent: true,
      },
      {
        source: '/film-printing-services',
        destination: '/services/film-printing-services',
        permanent: true,
      },
      {
        source: '/flat-bottom-pouches',
        destination: '/services/flat-bottom-pouches',
        permanent: true,
      },

      // 3. Blog Articles Legacy Root Permalinks -> Structured /blogs/*
      {
        source: '/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder',
        destination: '/blogs/best-printing-company-in-hyderabad-for-pouch-printing-without-cylinder',
        permanent: true,
      },
      {
        source: '/how-to-reduce-packaging-costs-without-compromising-quality',
        destination: '/blogs/how-to-reduce-packaging-costs-without-compromising-quality',
        permanent: true,
      },
      {
        source: '/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity',
        destination: '/blogs/how-shrink-sleeve-labels-boost-product-visibility-and-brand-identity',
        permanent: true,
      },
      {
        source: '/pouch-printing-without-cylinder-why-it-matters-for-small-businesses',
        destination: '/blogs/pouch-printing-without-cylinder-why-it-matters-for-small-businesses',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
