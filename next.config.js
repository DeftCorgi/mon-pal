/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_ENDPOINT: process.env["API_ENDPOINT"],
  },
  experimental: {
    serverComponentsExternalPackages: ["sequelize"],
  },
};

module.exports = nextConfig;
