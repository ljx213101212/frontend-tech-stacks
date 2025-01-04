/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config, { dev, isServer }) {
    config.devtool = dev ? 'eval-source-map' : 'source-map';
    return config;
  },
};

export default nextConfig;
