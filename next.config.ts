import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/trabajos", destination: "/clientes", permanent: true },
      { source: "/trabajos/:path*", destination: "/clientes/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
