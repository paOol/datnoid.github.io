const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below

  // Enable static export for GitHub Pages
  output: 'export',

  // GitHub Pages serves from root or docs folder
  // Since we're using custom domain, no basePath needed

  images: {
    domains: [
      'devfrens.sfo3.digitaloceanspaces.com',
      'raw.githubusercontent.com',
      'app.datnoid.com',
      'moonshot.sfo3.digitaloceanspaces.com',
      'devfrens.sfo3.digitaloceanspaces.com',
    ],
    // Use unoptimized images for static export
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
