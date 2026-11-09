import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../src/styles/index.css";
import { Navbar } from "@/app/components/Navbar";
import { CookieConsent } from "@/app/components/CookieConsent";
import { dictionaries } from "@/i18n/dictionaries";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL, locales } from "@/i18n/seo";
import { imageAlts } from "@/i18n/alts";

// Inter variable (pesos 100-900 en un solo archivo) con el eje opsz que ya usaba la web.
const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-inter",
});

// Solo existen /es, /en, /fr y /de: cualquier otro prefijo devuelve 404 en vez de duplicar el contenido en español.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
  icons: {
    icon: '/logo.png',
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
    <html lang={lang} className={inter.variable}>
      <body>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar lang={lang} labels={dict.nav} a11y={imageAlts[lang as keyof typeof imageAlts] ?? imageAlts.es} />
          <main className="flex-1">{children}</main>
          <footer className="bg-[#0E0E12] text-white/50 text-sm py-6 px-4 text-center space-y-2">
            <p>{dict.footer}</p>
            <p>
              <a
                href={`/${lang}/privacidad`}
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
      </body>
    </html>
  );
}
