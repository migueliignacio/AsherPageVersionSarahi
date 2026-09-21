import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/trabajos", destination: "/proyectos", permanent: true },
      { source: "/clientes", destination: "/proyectos", permanent: true },
      { source: "/trabajos/:path*", destination: "/proyectos", permanent: true },
      { source: "/clientes/:path*", destination: "/proyectos", permanent: true },
      { source: "/proceso", destination: "/quienes-somos#proceso", permanent: true },
      { source: "/servicios/marca", destination: "/servicios/legal#derecho-de-marcas", permanent: true },
    ];
  },
};

export default nextConfig;
