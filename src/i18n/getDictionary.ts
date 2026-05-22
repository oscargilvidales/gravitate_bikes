import { dictionaries } from './dictionaries';

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries.en;
};
