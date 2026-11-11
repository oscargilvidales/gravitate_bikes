import { defineRouting } from "next-intl/routing";

/** Cookie con el idioma elegido a mano en el selector. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * Rutas por idioma:
 * - Español (por defecto) sin prefijo: /, /alquiler, /contacto…
 * - Inglés, francés y alemán con prefijo: /en, /fr/alquiler, /de/contacto…
 */
export const routing = defineRouting({
  locales: ["es", "en", "fr", "de"],
  defaultLocale: "es",
  localePrefix: "as-needed",
  // El hreflang ya va en el <head> de cada página (src/i18n/seo.ts): sin cabecera Link para no duplicarlo.
  alternateLinks: false,
  // Idioma elegido a mano en el selector. Solo lo escribe el selector (ver proxy.ts).
  localeCookie: {
    name: LOCALE_COOKIE,
    maxAge: LOCALE_COOKIE_MAX_AGE,
    sameSite: "lax",
  },
});
