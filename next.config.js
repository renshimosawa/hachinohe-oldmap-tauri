/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // https://tauri.app/v1/guides/getting-started/setup/next-js/
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
