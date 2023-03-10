/** @type {import('next').NextConfig} */

const path = require('./src/');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join('styles')],
  },
}

module.exports = nextConfig
