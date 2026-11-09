import type { MetadataRoute } from "next";
import { languageAlternates, localizedUrl, locales, pagePaths } from "@/i18n/seo";

// Genera /sitemap.xml con cada página en cada idioma y sus alternates hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.flatMap((path) =>
    locales.map((lang) => ({
      url: localizedUrl(lang, path),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/privacidad" ? 0.2 : 0.8,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
