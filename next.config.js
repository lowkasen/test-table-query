/** @type {import('next').NextConfig} */

const withTranspileModules = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

// module.exports = nextConfig;
module.exports = withPlugins(
  [withTranspileModules(["@cloudscape-design/components"])],
  nextConfig
);
