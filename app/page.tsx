import { headers } from "next/headers";
import { redirect } from "next/navigation";

const supportedLocales = ["es", "en", "fr", "de"] as const;
const defaultLocale = "es";

function detectLocaleFromBrowser(acceptLanguage?: string | null) {
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((value) => value.split(";")[0].trim().toLowerCase())
    .map((value) => value.split("-")[0])
    .find((value) => supportedLocales.includes(value as (typeof supportedLocales)[number]));

  return preferred ?? defaultLocale;
}

export default async function RootPage() {
  const acceptLanguage = (await headers()).get("accept-language");
  const locale = detectLocaleFromBrowser(acceptLanguage);

  redirect(`/${locale}`);
}
