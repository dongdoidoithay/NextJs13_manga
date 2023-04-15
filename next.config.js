/** @type {import('next').NextConfig} */
const nextConfig = {
 // base App
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: true,
    //tubo
    turbo: {
      loaders: {
        // Option format
        '.md': [
          {
            loader: '@mdx-js/loader',
            options: {
              format: 'md',
            },
          },
        ],
        // Option-less format
        '.mdx': ['@mdx-js/loader'],
      },
    },
    webpack(config, options) {
      config.resolve.modules.push(path.resolve('./src'));
      return config;
    },
  },

  // stream
  //reactMode: 'concurrent', //chưa rõ
  workerThreads: true,
  streams: true,
  pageDataReceived: true,
  optimizeFonts: true,
  optimizeImages: true,
 //securiti
 poweredByHeader: false,
 generateEtags: true,
 httpAgentOptions: {
  keepAlive: true,
},
//option

 /*  images: {
    cacheDuration: 30 * 24 * 60 * 60, // 30 days
  }, */
}
/*const withPWA = require('next-pwa');

 module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    sw: 'service-worker.js',
    manifest: {
      name: 'My App',
      short_name: 'My App',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
 ...nextConfig,
}) */
module.exports = nextConfig
