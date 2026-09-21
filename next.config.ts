import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/trabajos", destination: "/clientes", permanent: true },
      { source: "/trabajos/:path*", destination: "/clientes/:path*", permanent: true },
      { source: "/proceso", destination: "/quienes-somos#proceso", permanent: true },
      { source: "/servicios/marca", destination: "/servicios/legal#derecho-de-marcas", permanent: true },
    ];
  },
};

export default nextConfig;
