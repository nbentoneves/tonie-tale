/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/create-my-tonies',
    experimental: {
        optimizePackageImports: ['@chakra-ui/react'],
    },
};

export default nextConfig;
