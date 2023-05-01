/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  distDir: "dist",
  trailingSlash: true,
};

module.exports = nextConfig;
