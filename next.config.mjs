/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simdashai.cloud',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
