import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    domains: ["www.cgwb.gov.in", "cdn.jsdelivr.net",
      "upload.wikimedia.org","seeklogo.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "cgwb.gov.in",
      },
    ],
  },
};

export default nextConfig;
