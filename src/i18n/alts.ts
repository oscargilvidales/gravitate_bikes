import type { SiteLocale } from "./seo";

/** Textos alternativos de las fotos, por idioma. */
export const imageAlts: Record<
  SiteLocale,
  { home: string; woom1: string; woom2: string; woom3: string; about: string; shop: string; menuOpen: string; menuClose: string; language: string; mainNav: string }
> = {
  es: {
    home: "Palmeras, flores y puente rojo en San Pedro Alcántara con la sierra al fondo",
    woom1: "Dos niños con casco junto a sus bicicletas woom",
    woom2: "Niño pequeño en una bici de equilibrio woom y niño mayor con su bici woom en una plaza",
    woom3: "Dos niños posando con sus bicicletas woom en una plaza",
    about: "Gabriel Sarria con equipación de descenso, sentado en el bosque junto a otro piloto",
    shop: "Fachada de la tienda Gravitate Bikes con el escaparate lleno de bicicletas",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    language: "Idioma",
    mainNav: "Navegación principal",
  },
  en: {
    home: "Palm trees, flowers and a red bridge in San Pedro Alcántara with the mountains behind",
    woom1: "Two children in helmets next to their woom bikes",
    woom2: "Toddler on a woom balance bike and an older child with his woom bike in a square",
    woom3: "Two children posing with their woom bikes in a square",
    about: "Gabriel Sarria in downhill gear, sitting in the woods next to another rider",
    shop: "Gravitate Bikes shop front with the window full of bicycles",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    mainNav: "Main navigation",
  },
  fr: {
    home: "Palmiers, fleurs et pont rouge à San Pedro Alcántara avec la montagne en arrière-plan",
    woom1: "Deux enfants casqués à côté de leurs vélos woom",
    woom2: "Tout-petit sur une draisienne woom et enfant plus âgé avec son vélo woom sur une place",
    woom3: "Deux enfants posant avec leurs vélos woom sur une place",
    about: "Gabriel Sarria en tenue de descente, assis dans la forêt à côté d'un autre pilote",
    shop: "Devanture du magasin Gravitate Bikes avec la vitrine remplie de vélos",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    language: "Langue",
    mainNav: "Navigation principale",
  },
  de: {
    home: "Palmen, Blumen und rote Brücke in San Pedro Alcántara mit den Bergen im Hintergrund",
    woom1: "Zwei Kinder mit Helm neben ihren woom-Fahrrädern",
    woom2: "Kleinkind auf einem woom-Laufrad und älteres Kind mit seinem woom-Fahrrad auf einem Platz",
    woom3: "Zwei Kinder posieren mit ihren woom-Fahrrädern auf einem Platz",
    about: "Gabriel Sarria in Downhill-Ausrüstung, im Wald sitzend neben einem anderen Fahrer",
    shop: "Ladenfront von Gravitate Bikes mit einem Schaufenster voller Fahrräder",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    language: "Sprache",
    mainNav: "Hauptnavigation",
  },
};
