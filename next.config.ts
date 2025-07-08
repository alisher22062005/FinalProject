import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vignette.wikia.nocookie.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
