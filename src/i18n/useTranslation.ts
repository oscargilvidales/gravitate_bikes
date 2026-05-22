'use client';

import { usePathname } from 'next/navigation';
import { dictionaries } from './dictionaries';

export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = 'en';

export function useTranslation() {
  const pathname = usePathname();
  
  // Extract the locale from the pathname, e.g., /es/alquiler -> es
  const segment = pathname?.split('/')[1] as Locale;
  
  const lang = dictionaries[segment] ? segment : defaultLocale;
  const t = dictionaries[lang];
  
  return { t, lang };
}
