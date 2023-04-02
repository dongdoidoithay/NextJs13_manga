/** @type {import('next').NextConfig} */
const nextConfig = {
// stream
reactMode: 'concurrent', //chưa rõ
  workerThreads: true,
  streams: true,
  pageDataReceived: true,
  optimizeFonts: true,
  optimizeImages: true,
//

  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
