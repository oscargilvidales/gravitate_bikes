import { HomePage } from "@/app/pages/HomePage";
import type { Metadata } from "next";
import { localizedMetadata } from "@/i18n/seo";
import { toLocale } from "@/i18n/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Inicio",
    description:
      "Taller con servicio de alquiler de bicicletas para pasear por Marbella.",
    ...localizedMetadata(lang, ""),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <HomePage lang={toLocale(lang)} />;
}
