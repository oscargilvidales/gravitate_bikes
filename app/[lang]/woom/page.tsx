import { WoomPage } from "@/app/pages/WoomPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bicicletas woom – Distribuidor Oficial",
  description:
    "Distribuidor oficial de bicicletas woom en San Pedro Alcántara. Las mejores bicis infantiles del mundo, ligeras y seguras para cada etapa del crecimiento.",
};

export default function Page() {
  return <WoomPage />;
}
