/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['s3.eu-central-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
