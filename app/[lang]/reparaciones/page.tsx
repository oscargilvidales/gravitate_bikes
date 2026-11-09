import { ReparacionesPage } from "@/app/pages/ReparacionesPage";
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
    title: "Taller de Reparaciones",
    description:
      "Reparaciones rápidas y profesionales para todo tipo de bicicletas en San Pedro Alcántara. Pinchazos, frenos, cambios de marchas y puesta a punto.",
    ...localizedMetadata(lang, "/reparaciones"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <ReparacionesPage lang={toLocale(lang)} />;
}
