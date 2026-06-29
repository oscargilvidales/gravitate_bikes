import { PrivacidadPage } from "@/app/pages/PrivacidadPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Consulta la política de privacidad de Gravitate Bikes. Información sobre el uso de datos, cookies y comunicaciones vía WhatsApp.",
};

export default function Page() {
  return <PrivacidadPage />;
}
