
const withMarkdoc = require('@markdoc/next.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  experimental: {
    serverComponentsExternalPackages: ['lucide-react'],
  },
};

module.exports = withMarkdoc(nextConfig);


