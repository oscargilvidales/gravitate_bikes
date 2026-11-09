import type { PagePath, SiteLocale } from "./seo";

type PageMeta = { title: string; description: string };

/**
 * Títulos y descripciones para buscadores, por idioma y página.
 * El layout añade " | Gravitate Bikes" a los títulos de las subpáginas; la home usa su título completo.
 */
export const pageMeta: Record<SiteLocale, Record<PagePath, PageMeta>> = {
  es: {
    "": {
      title: "Gravitate Bikes | Tienda de bicicletas en San Pedro Alcántara",
      description:
        "Alquiler de bicis de paseo y eléctricas desde 15 €/día, taller de reparaciones y bicis infantiles woom en San Pedro Alcántara, Marbella.",
    },
    "/alquiler": {
      title: "Alquiler de bicicletas en San Pedro Alcántara",
      description:
        "Alquila tu bicicleta de paseo o eléctrica en Gravitate Bikes. Tarifas por día y por semana en San Pedro Alcántara, Marbella. Incluye casco y candado.",
    },
    "/reparaciones": {
      title: "Taller de reparaciones de bicicletas",
      description:
        "Reparaciones rápidas y profesionales para todo tipo de bicicletas en San Pedro Alcántara. Pinchazos, frenos, cambios de marchas y puesta a punto.",
    },
    "/woom": {
      title: "Bicicletas woom – Distribuidor oficial",
      description:
        "Distribuidor oficial de bicicletas woom en San Pedro Alcántara. Las mejores bicis infantiles del mundo, ligeras y seguras para cada etapa del crecimiento.",
    },
    "/quienes-somos": {
      title: "Quiénes somos",
      description:
        "Conoce a Gravitate Bikes, el negocio familiar de alquiler y reparación de bicicletas en el paseo marítimo de San Pedro Alcántara, Marbella.",
    },
    "/contacto": {
      title: "Contacto y ubicación",
      description:
        "Encuentra Gravitate Bikes en la Avenida Lopez de Mena nº 14, San Pedro Alcántara, Marbella. Horarios, teléfono y cómo llegar.",
    },
    "/privacidad": {
      title: "Política de privacidad",
      description:
        "Consulta la política de privacidad de Gravitate Bikes. Información sobre el uso de datos, cookies y comunicaciones vía WhatsApp.",
    },
  },
  en: {
    "": {
      title: "Gravitate Bikes | Bike shop in San Pedro Alcántara",
      description:
        "City and electric bike rental from €15/day, bike repair workshop and woom kids' bikes in San Pedro Alcántara, Marbella.",
    },
    "/alquiler": {
      title: "Bike rental in San Pedro Alcántara",
      description:
        "Rent a city bike or e-bike at Gravitate Bikes. Daily and weekly rates in San Pedro Alcántara, Marbella. Helmet and lock included.",
    },
    "/reparaciones": {
      title: "Bike repair workshop",
      description:
        "Fast, professional repairs for all kinds of bikes in San Pedro Alcántara. Punctures, brakes, gears and full tune-ups.",
    },
    "/woom": {
      title: "woom bikes – Official dealer",
      description:
        "Official woom dealer in San Pedro Alcántara. The world's best kids' bikes: light and safe for every stage of growing up.",
    },
    "/quienes-somos": {
      title: "About us",
      description:
        "Meet Gravitate Bikes, the family-run bike rental and repair business on the seafront promenade of San Pedro Alcántara, Marbella.",
    },
    "/contacto": {
      title: "Contact and location",
      description:
        "Find Gravitate Bikes at Avenida Lopez de Mena 14, San Pedro Alcántara, Marbella. Opening hours, phone and directions.",
    },
    "/privacidad": {
      title: "Privacy policy",
      description:
        "Read the Gravitate Bikes privacy policy: how we use data, cookies and WhatsApp communications.",
    },
  },
  fr: {
    "": {
      title: "Gravitate Bikes | Magasin de vélos à San Pedro Alcántara",
      description:
        "Location de vélos de ville et électriques dès 15 €/jour, atelier de réparation et vélos enfants woom à San Pedro Alcántara, Marbella.",
    },
    "/alquiler": {
      title: "Location de vélos à San Pedro Alcántara",
      description:
        "Louez un vélo de ville ou électrique chez Gravitate Bikes. Tarifs à la journée et à la semaine à San Pedro Alcántara, Marbella. Casque et antivol inclus.",
    },
    "/reparaciones": {
      title: "Atelier de réparation de vélos",
      description:
        "Réparations rapides et professionnelles pour tous types de vélos à San Pedro Alcántara. Crevaisons, freins, dérailleurs et révision complète.",
    },
    "/woom": {
      title: "Vélos woom – Revendeur officiel",
      description:
        "Revendeur officiel woom à San Pedro Alcántara. Les meilleurs vélos pour enfants au monde, légers et sûrs à chaque étape de leur croissance.",
    },
    "/quienes-somos": {
      title: "Qui sommes-nous",
      description:
        "Découvrez Gravitate Bikes, l'entreprise familiale de location et de réparation de vélos sur le front de mer de San Pedro Alcántara, Marbella.",
    },
    "/contacto": {
      title: "Contact et adresse",
      description:
        "Retrouvez Gravitate Bikes au 14 Avenida Lopez de Mena, San Pedro Alcántara, Marbella. Horaires, téléphone et itinéraire.",
    },
    "/privacidad": {
      title: "Politique de confidentialité",
      description:
        "Consultez la politique de confidentialité de Gravitate Bikes : utilisation des données, cookies et communications via WhatsApp.",
    },
  },
  de: {
    "": {
      title: "Gravitate Bikes | Fahrradladen in San Pedro Alcántara",
      description:
        "Verleih von City- und E-Bikes ab 15 €/Tag, Fahrradwerkstatt und woom Kinderfahrräder in San Pedro Alcántara, Marbella.",
    },
    "/alquiler": {
      title: "Fahrradverleih in San Pedro Alcántara",
      description:
        "Miete ein City- oder E-Bike bei Gravitate Bikes. Tages- und Wochenpreise in San Pedro Alcántara, Marbella. Helm und Schloss inklusive.",
    },
    "/reparaciones": {
      title: "Fahrradwerkstatt",
      description:
        "Schnelle, professionelle Reparaturen für alle Fahrradtypen in San Pedro Alcántara. Platten, Bremsen, Schaltung und Inspektion.",
    },
    "/woom": {
      title: "woom Fahrräder – Offizieller Händler",
      description:
        "Offizieller woom-Händler in San Pedro Alcántara. Die besten Kinderfahrräder der Welt: leicht und sicher für jede Wachstumsphase.",
    },
    "/quienes-somos": {
      title: "Über uns",
      description:
        "Lerne Gravitate Bikes kennen, den Familienbetrieb für Fahrradverleih und -reparatur an der Strandpromenade von San Pedro Alcántara, Marbella.",
    },
    "/contacto": {
      title: "Kontakt und Anfahrt",
      description:
        "Gravitate Bikes findest du in der Avenida Lopez de Mena 14, San Pedro Alcántara, Marbella. Öffnungszeiten, Telefon und Anfahrt.",
    },
    "/privacidad": {
      title: "Datenschutzerklärung",
      description:
        "Datenschutzerklärung von Gravitate Bikes: Umgang mit Daten, Cookies und Kommunikation über WhatsApp.",
    },
  },
};
