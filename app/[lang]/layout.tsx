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
    "Bicis de paseo y eléctricas desde 15€/día. Recorre el paseo marítimo de Marbella a tu ritmo, con precios claros y taller propio.",
  keywords: ["Taller de bicicletas", "reparación de bicicletas", "venta de bicicletas", "alquiler de bicicletas", "san pedro alcántara", "marbella", "bici eléctrica", "reparaciones bici", "woom", "bici niña", "bici niño", "bici montaña", "bici eléctrica"],
  icons: {
    icon: '/logo.png',
  },
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
  const dict = dictionaries[lang as keyof typeof dictionaries] || dictionaries.es;
  return (
    <html lang={lang}>
      <body>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="bg-[#0E0E12] text-white/50 text-sm py-6 px-4 text-center space-y-2">
            <p>{dict.footer}</p>
            <p>
              <a
                href={`/${lang}/privacidad`}
                className="text-[#A78BFA]/70 hover:text-[#A78BFA] transition-colors underline underline-offset-2"
              >
                {dict.footerPrivacy}
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
