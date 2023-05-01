/** @format */

const {createVanillaExtractPlugin} = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@atlrdsgn/kit'],
}

module.exports = withVanillaExtract(nextConfig)
