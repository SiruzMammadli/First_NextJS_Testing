/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: "/photos/788946/pexels-photo-788946.jpeg"
      }
    ]
  }
}

module.exports = nextConfig
