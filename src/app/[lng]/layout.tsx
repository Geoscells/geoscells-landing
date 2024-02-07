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

export const generateMetadata = async ({params: {lng}}: {params: LngInterface}) => {
  const {t} = await getTranslation(lng);
  return {
    title: t('title'),
    description: t('description')
  };
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
