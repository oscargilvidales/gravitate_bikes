const dictionaries = {
  es: () => import('../dictionaries/es').then((module) => module.default),
  en: () => import('../dictionaries/en').then((module) => module.default),
  fr: () => import('../dictionaries/fr').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
