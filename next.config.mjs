/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com"
            },
            {
                protocol: "https",
                hostname: "img.clerk.com"
            },
            {
                protocol: "https",
                hostname: "uploadthing.com"
            },
            // {
            //     protocol: "https",
            //     hostname: "placehold.co"
            // },
        ],
        domains: ['utfs.io'], // Add 'utfs.io' to the list of allowed domains

    }
};

export default nextConfig;
