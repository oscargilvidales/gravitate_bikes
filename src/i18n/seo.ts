import type { Metadata } from "next";
import { pageMeta } from "./meta";
import { imageAlts } from "./alts";

/** Dominio canónico: sin www, https, sin barra final en las rutas. */
export const SITE_URL = "https://gravitatebikes.com";

export const locales = ["es", "en", "fr", "de"] as const;
export type SiteLocale = (typeof locales)[number];
export const defaultLocale: SiteLocale = "es";

export function isLocale(value: string): value is SiteLocale {
  return (locales as readonly string[]).includes(value);
}

const ogLocales: Record<SiteLocale, string> = {
  es: "es_ES",
  en: "en_GB",
  fr: "fr_FR",
  de: "de_DE",
};

/** Rutas indexables (sin prefijo de idioma). "" es la home. Existen en todos los idiomas. */
export const pagePaths = [
  "",
  "/alquiler",
  "/reparaciones",
  "/woom",
  "/quienes-somos",
  "/contacto",
  "/privacidad",
] as const;
export type PagePath = (typeof pagePaths)[number];

export function localizedUrl(lang: SiteLocale, path: PagePath): string {
  return `${SITE_URL}/${lang}${path}`;
}

/** Mapa hreflang -> URL absoluta, incluida la propia página y x-default. */
export function languageAlternates(path: PagePath): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localizedUrl(l, path);
  languages["x-default"] = localizedUrl(defaultLocale, path);
  return languages;
}

export const OG_IMAGE = { url: "/og/gravitate-bikes.jpg", width: 1200, height: 630 };

/** Título, descripción, canonical, hreflang, Open Graph y tarjeta de X para una página localizada. */
export function localizedMetadata(lang: string, path: PagePath): Metadata {
  const locale: SiteLocale = isLocale(lang) ? lang : defaultLocale;
  const url = localizedUrl(locale, path);
  const { title, description } = pageMeta[locale][path];
  // La home lleva la marca en su propio título; las subpáginas usan la plantilla "%s | Gravitate Bikes".
  const socialTitle = path === "" ? title : `${title} | Gravitate Bikes`;
  const image = { ...OG_IMAGE, alt: imageAlts[locale].home };
  return {
    title: path === "" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      siteName: "Gravitate Bikes",
      type: "website",
      url,
      title: socialTitle,
      description,
      images: [image],
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
