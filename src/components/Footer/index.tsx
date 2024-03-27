import React, {FC} from 'react';
import {getTranslation} from '@/i18n';
import ContentWrapper from '@/components/ContentWrapper';
import style from './styles.module.scss';
import Logo from '@/components/Logo';
import Navigation from '@/components/Footer/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import FacebookIcon from './icons/social/facebook.svg';
import LinkedinIcon from './icons/social/linkedin.svg';
import XIcon from './icons/social/x.svg';
import InstagramIcon from './icons/social/instagram.svg';
import ButtonLink from '@/components/ButtonLink';
import LngInterface from '@/LngInterface';

const Footer: FC<LngInterface> = async ({lng}) => {
  const {t} = await getTranslation(lng);

  const socialMediaLinksJsx = Object.entries(t('footer.socialMedias.links', {returnObjects: true})).map(
    ([smName, smLink]) => {
      let Icon;

      switch (smName) {
        case 'facebook':
          Icon = FacebookIcon;
          break;
        case 'linkedin':
          Icon = LinkedinIcon;
          break;
        case 'x':
          Icon = XIcon;
          break;
        case 'instagram':
          Icon = InstagramIcon;
          break;
        default:
          Icon = null;
      }

      if (!Icon) {
        throw new Error(`Icon for social media ${smName} is not found`);
      }

      return (
        <Link key={`social-medial-${smName}`} href={smLink}>
          <Image src={Icon} alt={`${smName} icon`} width={14} />
        </Link>
      );
    }
  );

  return (
    <footer className={style.container}>
      <ContentWrapper>
        <div className={style.content}>
          <div>
            <Logo className={style.logo} lng={lng} />
            <div>{t('fewWordsNearLogo.firstLine')}</div>
            <div>{t('fewWordsNearLogo.secondLine')}</div>
          </div>
          <Navigation lng={lng} />
          <div id="contact-info">
            <address className={style.footerItem}>
              <div>{t('footer.callUs.label')}</div>
              <Link href={`tel:${t('footer.callUs.tel')}`} className="with-animated-underline">
                {t('footer.callUs.tel')}
              </Link>
            </address>

            <address className={style.footerItem}>
              <div className={style.socialMediaLabel}>{t('footer.socialMedias.label')}</div>
              <div className={style.socialMediaContainer}>{socialMediaLinksJsx}</div>
            </address>
          </div>
          <div>
            <address className={style.footerItem}>
              <div>{t('footer.writeUs.label')}</div>
              <Link href={`mailto:${t('footer.writeUs.email')}`} className="with-animated-underline">
                {t('footer.writeUs.email')}
              </Link>
            </address>

            <address className={style.footerItem}>
              <div>{t('footer.address.label')}</div>
              <div>{t('footer.address.addr')}</div>
            </address>
          </div>
          <div>
            <div className={style.footerItem}>
              <ButtonLink className={style.buttonLink}>{t('footer.contactUsButton')}</ButtonLink>
            </div>

            <div className={style.footerItem}>
              <Link
                href={`${process.env.MAIN_SITE_BASE_PATH}/${lng}/docs/privacy-policy`}
                className="with-animated-underline">
                {t('footer.policyLink')}
              </Link>
            </div>
          </div>
          <div>
            © {new Date().getFullYear()}. {t('footer.rights')}
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
