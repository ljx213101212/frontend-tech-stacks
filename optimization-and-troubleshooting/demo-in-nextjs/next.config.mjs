/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "custom", // Use a custom loader
  },
  headers: async () => {
    return [
      {
        // Apply headers to assets
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year, immutable
          },
        ],
      },
      // {
      //   // Apply headers to API routes
      //   source: '/api/:path*',
      //   headers: [
      //     {
      //       key: 'Cache-Control',
      //       value: 'no-store',
      //     },
      //   ],
      // },
      // {
      //   // Default headers
      //   source: '/:path*',
      //   headers: [
      //     {
      //       key: 'Cache-Control',
      //       value: 'public, max-age=3600, immutable',
      //     },
      //     {
      //       key: 'Expires',
      //       value: new Date(Date.now() + 3600 * 1000).toUTCString(), // 1 hour cache
      //     },
      //   ],
      // },
    ];
  },
};

export default nextConfig;
