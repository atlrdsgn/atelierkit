
// const withMarkdoc = require('@markdoc/next.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // poweredByHeader: false,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
};

// module.exports = withMarkdoc(nextConfig);

module.exports = nextConfig;


