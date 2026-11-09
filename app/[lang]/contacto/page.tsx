import { ContactoPage } from "@/app/pages/ContactoPage";
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
    title: "Contacto y Ubicación",
    description:
      "Encuentra Gravitate Bikes en la Avenida Lopez de Mena nº 14, San Pedro Alcántara, Marbella. Horarios, teléfono y cómo llegar.",
    ...localizedMetadata(lang, "/contacto"),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return <ContactoPage lang={toLocale(lang)} />;
}
