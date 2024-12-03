/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images:{
        /** FIXME: Change this later */
        unoptimized: true
    },
    experimental: {
        optimizePackageImports: ['@chakra-ui/react'],
    },

};

export default nextConfig;
