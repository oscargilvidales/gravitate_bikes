import { QuienesSomosPage } from "@/app/pages/QuienesSomosPage";
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
  return localizedMetadata(lang, "/quienes-somos");
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(toLocale(lang));
  return <QuienesSomosPage lang={toLocale(lang)} />;
}
