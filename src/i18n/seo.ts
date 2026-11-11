import type { Metadata } from "next";
import { routing } from "./routing";
import { getPathname } from "./navigation";
import { getDictionary } from "./server";

/** Dominio canónico: sin www, https, sin barra final en las rutas. */
export const SITE_URL = "https://gravitatebikes.com";

export const locales = routing.locales;
export type SiteLocale = (typeof locales)[number];
export const defaultLocale: SiteLocale = routing.defaultLocale;

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

/** Clave de cada página en el bloque "meta" de messages/*.json. */
const metaKeys = {
  "": "home",
  "/alquiler": "alquiler",
  "/reparaciones": "reparaciones",
  "/woom": "woom",
  "/quienes-somos": "quienesSomos",
  "/contacto": "contacto",
  "/privacidad": "privacidad",
} as const satisfies Record<PagePath, string>;

/** Ruta relativa con prefijo de idioma solo si no es español: "/alquiler", "/en/alquiler", "/", "/en". */
export function localizedPath(lang: SiteLocale, path: PagePath): string {
  return getPathname({ locale: lang, href: path || "/" });
}

/** URL absoluta: https://gravitatebikes.com/ (home en español), https://gravitatebikes.com/en/alquiler… */
export function localizedUrl(lang: SiteLocale, path: PagePath): string {
  return `${SITE_URL}${localizedPath(lang, path)}`;
}

/** Mapa hreflang -> URL absoluta, incluida la propia página y x-default (versión en español, sin prefijo). */
export function languageAlternates(path: PagePath): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localizedUrl(l, path);
  languages["x-default"] = localizedUrl(defaultLocale, path);
  return languages;
}

export const OG_IMAGE = { url: "/og/gravitate-bikes.jpg", width: 1200, height: 630 };

/** Título, descripción, canonical, hreflang, Open Graph y tarjeta de X para una página localizada. */
export async function localizedMetadata(lang: string, path: PagePath): Promise<Metadata> {
  const locale: SiteLocale = isLocale(lang) ? lang : defaultLocale;
  const url = localizedUrl(locale, path);
  const t = await getDictionary(locale);
  const { title, description } = t.meta[metaKeys[path]];
  // La home lleva la marca en su propio título; las subpáginas usan la plantilla "%s | Gravitate Bikes".
  const socialTitle = path === "" ? title : `${title} | Gravitate Bikes`;
  const image = { ...OG_IMAGE, alt: t.alts.home };
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
