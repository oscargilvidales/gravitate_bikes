import { ContactoPage } from "@/app/pages/ContactoPage";
import type { Metadata } from "next";
import { localizedMetadata } from "@/i18n/seo";
import { setRequestLocale } from "next-intl/server";
import { toLocale } from "@/i18n/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return localizedMetadata(lang, "/contacto");
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(toLocale(lang));
  return <ContactoPage lang={toLocale(lang)} />;
}
