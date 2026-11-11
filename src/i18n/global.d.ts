import type { routing } from "./routing";
import type messages from "../../messages/es.json";

// Tipos de next-intl: idiomas válidos y estructura de los mensajes (la de messages/es.json).
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
