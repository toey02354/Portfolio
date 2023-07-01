/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    secretKey: "secret"
  }
}

module.exports = nextConfig
