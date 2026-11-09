import { QuienesSomosPage } from "@/app/pages/QuienesSomosPage";
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
    title: "Quiénes Somos",
    description:
      "Conoce a Gravitate Bikes, el negocio familiar de alquiler y reparación de bicicletas en el paseo marítimo de San Pedro Alcántara, Marbella.",
    ...localizedMetadata(lang, "/quienes-somos"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <QuienesSomosPage lang={toLocale(lang)} />;
}
