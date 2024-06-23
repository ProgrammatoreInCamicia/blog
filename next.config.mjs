/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/ProgrammatoreInCamicia/blog-posts/main/images/**'
            },
        ],
    },
};

export default nextConfig;
