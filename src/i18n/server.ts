import { dictionaries } from "./dictionaries";
import { defaultLocale, isLocale, type SiteLocale } from "./seo";

export type Locale = SiteLocale;

/** Diccionario para Server Components (sin hooks ni JS en el cliente). */
export function getDictionary(lang: string) {
  return dictionaries[isLocale(lang) ? lang : defaultLocale];
}

export function toLocale(lang: string): Locale {
  return isLocale(lang) ? lang : defaultLocale;
}
