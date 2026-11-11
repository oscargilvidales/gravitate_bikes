import { OG_IMAGE, SITE_URL, localizedUrl, type SiteLocale } from "./seo";

/**
 * Datos estructurados (schema.org BikeStore) del negocio.
 * Solo datos publicados en la web: dirección, teléfono, email, horario e Instagram.
 */
export function bikeStoreJsonLd(lang: SiteLocale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BikeStore",
    "@id": `${SITE_URL}/#store`,
    name: "Gravitate Bikes",
    description,
    url: localizedUrl(lang, ""),
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    telephone: "+34612477841",
    email: "gravitatebikes@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Lopez de Mena 14",
      postalCode: "29670",
      addressLocality: "San Pedro Alcántara, Marbella",
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
    ],
    sameAs: ["https://instagram.com/gravitatebikes"],
  };
}
