import {createInstance, Resource} from 'i18next';
import {initReactI18next} from 'react-i18next/initReactI18next';
import {defaultLangSlug, defaultNS, supportedLangSlugs} from './settings';

export async function getTranslation(lng: string, ns = defaultNS) {
  const i18nInstance = createInstance();
  await i18nInstance.use(initReactI18next).init({
    lng,
    supportedLngs: supportedLangSlugs,
    fallbackLng: defaultLangSlug,
    defaultNS,
    ns,
    resources: supportedLangSlugs.reduce((acc, cur) => {
      acc[cur] = {[defaultNS]: require(`./locales/${cur}/${defaultNS}.json`)};
      return acc;
    }, {} as Resource)
  });

  return {
    t: i18nInstance.t,
    i18n: i18nInstance
  };
}
