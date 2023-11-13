/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
    minimumCacheTTL: 1500000,
  },
  sassOptions: {
    includePaths: ["styles"],
  },
  compiler: {
    // The regexes defined here are processed in Rust so the syntax is different from
    // JavaScript `RegExp`s. See https://docs.rs/regex.
    reactRemoveProperties: { properties: ["^data-test"] },
  },
};

module.exports = nextConfig;
