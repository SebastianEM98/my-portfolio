import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 100],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Redirect vercel.app domain to custom domain
      {
        source: "/:path*",
        destination: "https://sebastianecheverri.dev/:path*",
        permanent: true, // 301 redirect
        has: [
          {
            type: "host",
            value: "sebastianecheverri.vercel.app",
          },
        ],
      },
      // Redirect www to non-www
      {
        source: "/:path*",
        destination: "https://sebastianecheverri.dev/:path*",
        permanent: true, // 301 redirect
        has: [
          {
            type: "host",
            value: "www.sebastianecheverri.dev",
          },
        ],
      },
    ];
  },
};

export default nextConfig;