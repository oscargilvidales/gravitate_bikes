import { HomePage } from "@/app/pages/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Taller con servicio de alquiler de bicicletas para pasear por Marbella.",
};

export default function Page() {
  return <HomePage />;
}
