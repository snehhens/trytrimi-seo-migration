import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compress: true,

  async redirects() {
    return [
      { source: "/semaglutide", destination: "/treatments/semaglutide", permanent: true },
      { source: "/tirzepatide", destination: "/treatments/tirzepatide", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  images: {
    unoptimized: true,
    disableStaticImages: true,
  },

  // Turbopack config (Next.js 16 default bundler)
  // Use forward-slash relative paths so they work on Windows and Unix
  turbopack: {
    root: __dirname,
    resolveAlias: {
      "@": "./src",
      "react-router-dom": "./src/compat/react-router-dom.tsx",
      "react-helmet-async": "./src/compat/react-helmet-async.tsx",
    },
  },

  // Webpack config used when running `next build --no-turbopack`
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|svg)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[contenthash][ext]",
      },
    });

    return config;
  },
};

export default nextConfig;
