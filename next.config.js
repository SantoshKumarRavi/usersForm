/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
  },
}

module.exports = nextConfig
