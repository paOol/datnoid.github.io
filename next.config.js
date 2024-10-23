const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below

  images: {
    domains: [
      'devfrens.sfo3.digitaloceanspaces.com',
      'raw.githubusercontent.com',
      'app.datnoid.com',
      'moonshot.sfo3.digitaloceanspaces.com',
      'devfrens.sfo3.digitaloceanspaces.com',
    ],
  },
};

module.exports = withMDX(nextConfig);
