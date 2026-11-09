import { PrivacidadPage } from "@/app/pages/PrivacidadPage";
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
    title: "Política de Privacidad",
    description:
      "Consulta la política de privacidad de Gravitate Bikes. Información sobre el uso de datos, cookies y comunicaciones vía WhatsApp.",
    ...localizedMetadata(lang, "/privacidad"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <PrivacidadPage lang={toLocale(lang)} />;
}
