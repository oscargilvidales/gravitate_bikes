import { OG_IMAGE, SITE_URL, localizedUrl, type SiteLocale } from "./seo";

type Founder = { jobTitle: string; description: string };

/**
 * Datos estructurados (schema.org BikeStore; "BicycleStore" no existe en schema.org) del negocio.
 * Solo datos publicados en la web: dirección, teléfono, email, horario, Instagram y fundador.
 * Yep Bike y Bike Base solo se citan en la descripción del fundador (trabajó allí): no son
 * alternateName ni sameAs de Gravitate, que es otra tienda.
 */
export function bikeStoreJsonLd(lang: SiteLocale, description: string, founder: Founder) {
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
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#gabriel`,
      name: "Gabriel Sarria",
      jobTitle: founder.jobTitle,
      description: founder.description,
      image: `${SITE_URL}/about/gabriel-sarria.jpg`,
      url: localizedUrl(lang, "/quienes-somos"),
    },
  };
}
