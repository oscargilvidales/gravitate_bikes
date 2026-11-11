import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, routing } from "./src/i18n/routing";

const handleI18nRouting = createMiddleware(routing);
const cookiePrefix = `${LOCALE_COOKIE}=`;

/**
 * - "/" y las rutas sin prefijo se sirven en español (reescritura interna a /es/...).
 * - Sin cookie NEXT_LOCALE, si el navegador prefiere en/fr/de se redirige a su versión.
 * - Con cookie NEXT_LOCALE se respeta el idioma guardado.
 * Las redirecciones 301 de /es/... a /... están en next.config.ts.
 */
export default function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);

  // next-intl también guarda la cookie al visitar una URL de un idioma distinto al del navegador.
  // Aquí la cookie solo la escribe el selector de idioma (en el cliente), así que se descarta esa Set-Cookie.
  const setCookies = response.headers.getSetCookie();
  if (setCookies.some((c) => c.startsWith(cookiePrefix))) {
    response.headers.delete("set-cookie");
    for (const c of setCookies) if (!c.startsWith(cookiePrefix)) response.headers.append("set-cookie", c);
  }
  return response;
}

export const config = {
  // Todo menos internos de Next/Vercel y archivos con extensión (favicon.ico, icon.png, sitemap.xml, robots.txt, imágenes…).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
