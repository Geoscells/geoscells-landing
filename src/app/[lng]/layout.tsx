import '@/styles/global.scss';
import {supportedLanguages} from '@/i18n/settings';
import {gilroyFont, interFont} from '@/fonts';
import {getTranslation} from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import {FC, PropsWithChildren} from 'react';
import LngInterface from '@/LngInterface';
import {GoogleTagManager} from '@next/third-parties/google';
import pjson from '@/../package.json';
import {Metadata, Viewport} from 'next';
import StyleVariables from '../../styles/variables.module.scss';

export const generateMetadata = async ({params: {lng}}: {params: LngInterface}): Promise<Metadata> => {
  const {t} = await getTranslation(lng);
  const language = supportedLanguages.find(sl => ('iso639_1' in sl ? sl.iso639_1 : sl.iso3166_2) === lng);
  const altLanguages = supportedLanguages.filter(sl => sl.locale !== language?.locale);
  const metadataBase = new URL(process.env.NODE_ENV === 'production' ? pjson.homepage : 'http://localhost:3000');

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: metadataBase,
    openGraph: {
      type: 'website',
      siteName: metadataBase.host,
      locale: language?.locale,
      alternateLocale: altLanguages.map(sl => sl.locale),
      url: `${metadataBase.origin}/${lng}`,
      phoneNumbers: [t('headerContact.tel')],
      emails: [t('headerContact.email')]
    },
    twitter: {
      site: '@geoscells'
    },
    alternates: {
      canonical: `${metadataBase.origin}/en`,
      languages: supportedLanguages.reduce((acc, sl) => {
        if (sl.locale === 'en-US') return acc;

        const slug = 'iso639_1' in sl ? sl.iso639_1 : sl.iso3166_2;
        const path = `${metadataBase.origin}/${slug}`;
        return {...acc, [sl.locale]: path};
      }, {})
    }
  };
};

export const viewport: Viewport = {
  themeColor: StyleVariables.colorBlack
};

export const generateStaticParams = () =>
  supportedLanguages.map(sl => ({lng: 'iso639_1' in sl ? sl.iso639_1 : sl.iso3166_2}));

interface RootLayoutProps extends PropsWithChildren {
  params: LngInterface;
}

const RootLayout: FC<RootLayoutProps> = ({params: {lng}, children}) => {
  const language = supportedLanguages.find(sl => ('iso639_1' in sl ? sl.iso639_1 : sl.iso3166_2) === lng);

  return (
    <html lang={language?.locale} className={`${interFont.variable} ${gilroyFont.variable}`}>
      <body suppressHydrationWarning>
        <BackToTopButton>
          <Header lng={lng} />
          {children}
          <Footer lng={lng} />
        </BackToTopButton>
      </body>
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID ?? ''} />
    </html>
  );
};

export default RootLayout;
