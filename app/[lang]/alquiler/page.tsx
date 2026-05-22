import { AlquilerPage } from "@/app/pages/AlquilerPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Bicicletas",
  description:
    "Alquila tu bicicleta de paseo o eléctrica en Gravitate Bikes. Tarifas por horas, medio día o día completo en San Pedro Alcántara.",
};

export default function Page() {
  return <AlquilerPage />;
}
