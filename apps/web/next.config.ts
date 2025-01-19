import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: isProduction
                    ? "https://next-hono-turborepo-api.vercel.app/api/:path*"
                    : "http://localhost:3001/api/:path*",
            },
        ];
    },
};

export default nextConfig;
