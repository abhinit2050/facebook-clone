/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: ['/appsrc'.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
