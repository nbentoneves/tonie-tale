/** @type {import('next').NextConfig} */

console.log(process.env.BASE_URL)

const nextConfig = {
    output: 'export',
    basePath: process.env.BASE_URL,
    experimental: {
        optimizePackageImports: ['@chakra-ui/react'],
    },
};

export default nextConfig;
