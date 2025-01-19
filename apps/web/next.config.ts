import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination:
                    process.env.NEXT_PUBLIC_API_BASE_URL ||
                    "next-hono-turborepo-api.vercel.app" + "/api/:path*",
            },
        ];
    },
};

export default nextConfig;
