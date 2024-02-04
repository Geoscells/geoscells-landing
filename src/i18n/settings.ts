// Languages

interface SupportedLanguage {
  locale: string;
}

export interface SupportedLanguageIso6391 extends SupportedLanguage {
  iso639_1: string;
}

export interface SupportedLanguageIso31662 extends SupportedLanguage {
  iso3166_2: string;
}

export const supportedLanguages: (SupportedLanguageIso6391 | SupportedLanguageIso31662)[] = [
  {
    iso639_1: 'en',
    locale: 'en-US'
  },
  {
    iso3166_2: 'ua',
    locale: 'uk-UA'
  }
];

const defaultLanguage = supportedLanguages[0];

// Locales

export const supportedLocales = supportedLanguages.map(lng => lng.locale);

export const defaultLocale = defaultLanguage.locale;

// Slugs

export const supportedLangSlugs = supportedLanguages.map(lng => ('iso639_1' in lng ? lng.iso639_1 : lng.iso3166_2));

export const defaultLangSlug = 'iso639_1' in defaultLanguage ? defaultLanguage.iso639_1 : defaultLanguage.iso3166_2;

// Namespaces

export const defaultNS = 'translation';

// Other

export const cookieName = 'i18slug';
