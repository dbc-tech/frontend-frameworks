/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  trailingSlash: true,
  // assetPrefix: './', // to allow no serve files, it stops HMR websocket working!
};

module.exports = nextConfig;
