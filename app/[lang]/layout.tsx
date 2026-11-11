import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../src/styles/index.css";
import { Navbar } from "@/app/components/Navbar";
import { CookieConsent } from "@/app/components/CookieConsent";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { SITE_URL, localizedPath } from "@/i18n/seo";
import { routing } from "@/i18n/routing";
import { bikeStoreJsonLd } from "@/i18n/structuredData";
import { getDictionary } from "@/i18n/server";

// Inter variable (pesos 100-900 en un solo archivo) con el eje opsz que ya usaba la web.
const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-inter",
});

// Solo existen es (sin prefijo), /en, /fr y /de: cualquier otro prefijo devuelve 404 en vez de duplicar el contenido en español.
export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gravitate Bikes",
    template: "%s | Gravitate Bikes",
  },
  description:
    "Bicis de paseo y eléctricas desde 15€/día. Recorre el paseo marítimo de Marbella a tu ritmo, con precios claros y taller propio.",
  keywords: ["Taller de bicicletas", "reparación de bicicletas", "venta de bicicletas", "alquiler de bicicletas", "san pedro alcántara", "marbella", "bici eléctrica", "reparaciones bici", "woom", "bici niña", "bici niño", "bici montaña", "bici eléctrica"],
  // Iconos: app/favicon.ico, app/icon.png y app/apple-icon.png (cuadrados; Google exige 1:1 y ≥48px).
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) notFound();
  // Permite el renderizado estático de las páginas con next-intl.
  setRequestLocale(lang);
  const dict = await getDictionary(lang);
  return (
    <html lang={lang} className={inter.variable}>
      <body>
        <NextIntlClientProvider locale={lang} messages={null}>
          <script
            type="application/ld+json"
            // "<" escapado para que el JSON no pueda cerrar la etiqueta <script>
            dangerouslySetInnerHTML={{ __html: JSON.stringify(bikeStoreJsonLd(lang, dict.meta.home.description, dict.jsonLd.founder)).replace(/</g, "\\u003c") }}
          />
          <div className="min-h-screen flex flex-col bg-white">
            <Navbar lang={lang} labels={dict.nav} a11y={dict.alts} />
            <main className="flex-1">{children}</main>
            <footer className="bg-[#0E0E12] text-white/50 text-sm py-6 px-4 text-center space-y-2">
              <p>{dict.footer}</p>
              <p>
                <a
                  href={localizedPath(lang, "/privacidad")}
                  className="text-[#A78BFA] hover:text-[#C4B5FD] transition-colors underline underline-offset-2"
                >
                  {dict.footerPrivacy}
                </a>
              </p>
            </footer>
          </div>
          <CookieConsent copy={dict.cookieConsent} />
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
