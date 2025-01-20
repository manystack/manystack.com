/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {},
});

module.exports = withMDX(nextConfig);
