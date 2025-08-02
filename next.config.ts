import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "univlr-bucket.s3.sa-east-1.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
