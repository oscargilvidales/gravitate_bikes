import { ReparacionesPage } from "@/app/pages/ReparacionesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taller de Reparaciones",
  description:
    "Reparaciones rápidas y profesionales para todo tipo de bicicletas en San Pedro Alcántara. Pinchazos, frenos, cambios de marchas y puesta a punto.",
};

export default function Page() {
  return <ReparacionesPage />;
}
