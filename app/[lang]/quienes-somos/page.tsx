import { QuienesSomosPage } from "@/app/pages/QuienesSomosPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce a Gravitate Bikes, el negocio familiar de alquiler y reparación de bicicletas en el paseo marítimo de San Pedro Alcántara, Marbella.",
};

export default function Page() {
  return <QuienesSomosPage />;
}
