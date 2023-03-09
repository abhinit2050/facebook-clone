/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: ['/'.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
