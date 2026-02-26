import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "odo-cdn.imgix.net",
      },
      {
        protocol: "https",
        hostname: "odo.imgix.net",
      },
    ],
  },
};

export default nextConfig;
