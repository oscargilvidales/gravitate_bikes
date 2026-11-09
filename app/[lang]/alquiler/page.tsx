import { AlquilerPage } from "@/app/pages/AlquilerPage";
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
    title: "Alquiler de Bicicletas",
    description:
      "Alquila tu bicicleta de paseo o eléctrica en Gravitate Bikes. Tarifas por horas, medio día o día completo en San Pedro Alcántara.",
    ...localizedMetadata(lang, "/alquiler"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <AlquilerPage lang={toLocale(lang)} />;
}
