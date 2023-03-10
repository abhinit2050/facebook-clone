/** @type {import('next').NextConfig} */

const path = require('./src/styles');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
