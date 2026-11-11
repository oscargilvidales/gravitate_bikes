import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "./routing";

export type Locale = (typeof routing.locales)[number];

/**
 * Textos de messages/{lang}.json cargados por next-intl, para Server Components.
 * Se accede por objeto (t.home.hero.title1) para no tocar el marcado de las páginas;
 * en código nuevo se puede usar también getTranslations()/useTranslations().
 */
export function getDictionary(lang: Locale) {
  return getMessages({ locale: lang });
}

export function toLocale(lang: string): Locale {
  return hasLocale(routing.locales, lang) ? lang : routing.defaultLocale;
}
