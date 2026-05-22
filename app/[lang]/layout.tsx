import type { Metadata } from "next";
import "../../src/styles/index.css";
import { Navbar } from "@/app/components/Navbar";
import { dictionaries } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: {
    default: "Gravitate Bikes",
    template: "%s | Gravitate Bikes",
  },
  description:
    "Disfruta de paseos inolvidables por las costas y senderos de Marbella con nuestras bicicletas de alta calidad. Disponemos de bicis para todas las edades y niveles, eléctricas y convencionales y ofrecemos servicio técnico especializado para garantizar tu seguridad y comodidad.",
  keywords: ["Taller de bicicletas", "reparación de bicicletas", "venta de bicicletas", "alquiler de bicicletas", "san pedro alcántara", "marbella", "bici eléctrica", "reparaciones bici", "woom", "bici niña", "bici niño", "bici montaña", "bici eléctrica"],
  openGraph: {
    siteName: "Gravitate Bikes",
    locale: "es_ES",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="bg-[#0E0E12] text-white/50 text-sm py-6 px-4 text-center">
            <p>
              {dictionaries[lang as keyof typeof dictionaries]?.footer || dictionaries.en.footer}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
