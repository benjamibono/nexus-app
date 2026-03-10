import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "html.tailus.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tailus.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
