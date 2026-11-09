import { WoomPage } from "@/app/pages/WoomPage";
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
    title: "Bicicletas woom – Distribuidor Oficial",
    description:
      "Distribuidor oficial de bicicletas woom en San Pedro Alcántara. Las mejores bicis infantiles del mundo, ligeras y seguras para cada etapa del crecimiento.",
    ...localizedMetadata(lang, "/woom"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <WoomPage lang={toLocale(lang)} />;
}
