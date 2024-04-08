const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/docs-kafka-summary" : "";

// const assetPrefix = "/docs-kafka-summary";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  // distDir: 'dist',
}

module.exports = {
  ...withNextra(),
  ...nextConfig,
}