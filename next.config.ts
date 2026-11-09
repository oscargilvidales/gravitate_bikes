import type { NextConfig } from "next";

// Imágenes de /public sin hash en el nombre: caché larga en navegador y CDN,
// pero revalidable (si se sustituye un archivo con el mismo nombre se acaba actualizando).
const publicAssetCache = "public, max-age=2592000, stale-while-revalidate=86400";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Las variantes optimizadas se guardan 31 días en la caché de imágenes de Vercel.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return ["/carrusel/:path*", "/bikes/:path*", "/woom/:path*", "/home/:path*", "/about/:path*", "/dondeEstamos/:path*", "/logo.png", "/whatsapp-glyph-black.svg"].map(
      (source) => ({ source, headers: [{ key: "Cache-Control", value: publicAssetCache }] }),
    );
  },
};

export default nextConfig;
