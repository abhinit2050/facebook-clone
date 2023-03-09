/** @type {import('next').NextConfig} */

const path = require('./src/styled');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
