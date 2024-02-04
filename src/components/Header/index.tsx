import style from './styles.module.scss';
import Logo from '../Logo';
import Navigation from './Navigation';
import ContentWrapper from '@/components/ContentWrapper';
import {getTranslation} from '@/i18n';
import Link from 'next/link';
import Image from 'next/image';
import PhoneIcon from './icons/phone.svg';
import {FC} from 'react';
import LngInterface from '@/LngInterface';

const Header: FC<LngInterface> = async ({lng}) => {
  const {t} = await getTranslation(lng);
  return (
    <header className={style.header}>
      <ContentWrapper>
        <div className={style.content}>
          <div className={style.left}>
            <Logo className={style.logoWrapper} />
            <div className={style.delimiter} />
            <div className={style.fewJunkWords}>
              <div>{t('fewWordsNearLogo.firstLine')}</div>
              <div>{t('fewWordsNearLogo.secondLine')}</div>
            </div>
          </div>
          <Navigation lng={lng} />
          <div className={style.contactBlock}>
            <div className={style.anyQuestions}>
              <span>{t('headerContact.anyQuestions')}</span>
            </div>
            <div className={style.info}>
              <div className={style.firstBlock}>
                <div className={style.fbLinkWrapper}>
                  <Link href={`tel:${t('headerContact.tel')}`} className="with-animated-underline">
                    {t('headerContact.tel')}
                  </Link>
                </div>
                <div className={style.fbLinkWrapper}>
                  <Link href={`mailto:${t('headerContact.email')}`} className={`with-animated-underline`}>
                    {t('headerContact.email')}
                  </Link>
                </div>
              </div>
              <div className={style.secondBlock}>
                <Link href={`tel:${t('headerContact.tel')}`} className={`with-animated-underline ${style.fbLink}`}>
                  <Image src={PhoneIcon} alt="Phone icon" width={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
