/** @type {import('next').NextConfig} */

const withTranspileModules = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig;
module.exports = withPlugins([
  nextConfig,
  withTranspileModules(["@cloudscape-design/components"]),
]);
