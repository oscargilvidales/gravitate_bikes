import { WoomPage } from "@/app/pages/WoomPage";
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
  return localizedMetadata(lang, "/woom");
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  setRequestLocale(toLocale(lang));
  return <WoomPage lang={toLocale(lang)} />;
}
