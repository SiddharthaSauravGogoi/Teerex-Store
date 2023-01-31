/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['geektrust.s3.ap-southeast-1.amazonaws.com ', 'themoviedb.org'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'geektrust.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
