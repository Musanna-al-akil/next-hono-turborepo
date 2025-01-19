import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination:
                    process.env.NEXT_PUBLIC_API_BASE_URL + "/api/:path*",
            },
        ];
    },
};

export default nextConfig;
