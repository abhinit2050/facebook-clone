/** @type {import('next').NextConfig} */


const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: ['/app/src'.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
