/** @type {import('next').NextConfig} */

const path = require('src');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [src.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
