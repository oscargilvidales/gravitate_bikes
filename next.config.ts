import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Imágenes de /public sin hash en el nombre: caché larga en navegador y CDN,
// pero revalidable (si se sustituye un archivo con el mismo nombre se acaba actualizando).
const publicAssetCache = "public, max-age=2592000, stale-while-revalidate=86400";

const nextConfig: NextConfig = {
  // URLs sin barra final: /es/contacto/ redirige (308) a /es/contacto. Es el valor por defecto,
  // pero se deja explícito porque sitemap, canonical y hreflang se generan sin barra.
  trailingSlash: false,
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
  // El español se sirve sin prefijo: las URLs antiguas /es y /es/... redirigen con 301 a / y /...
  // (antes de que actúe proxy.ts; la query string se conserva).
  async redirects() {
    return [
      { source: "/es", destination: "/", statusCode: 301 },
      { source: "/es/:path*", destination: "/:path*", statusCode: 301 },
    ];
  },
  async headers() {
    // ":path+" (no "*"): "/woom/:path*" también coincidiría con la página /woom en español.
    return ["/carrusel/:path+", "/bikes/:path+", "/woom/:path+", "/home/:path+", "/about/:path+", "/dondeEstamos/:path+", "/logo.png", "/whatsapp-glyph-black.svg"].map(
      (source) => ({ source, headers: [{ key: "Cache-Control", value: publicAssetCache }] }),
    );
  },
};

export default withNextIntl(nextConfig);
