import { ContactoPage } from "@/app/pages/ContactoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto y Ubicación",
  description:
    "Encuentra Gravitate Bikes en la Avenida Lopez de Mena nº 14, San Pedro Alcántara, Marbella. Horarios, teléfono y cómo llegar.",
};

export default function Page() {
  return <ContactoPage />;
}
