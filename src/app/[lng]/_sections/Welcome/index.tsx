import style from './styles.module.scss';
import {getTranslation} from '@/i18n';
import ContentWrapper from '@/components/ContentWrapper';
import ButtonLink from '@/components/ButtonLink';
import LogoText from './logo-text.svg';
import Image from 'next/image';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const Welcome: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);
  const pointsJsx = t('sections.welcome.points', {returnObjects: true}).map((point, index) => (
    <li key={`point-${index}`}>{point}</li>
  ));
  return (
    <section className={style.container}>
      <ContentWrapper className={style.contentWrapper}>
        <div className={style.content}>
          <div className={style.title}>{t('sections.welcome.title')}</div>
          <ul className={style.points}>{pointsJsx}</ul>
          <div className={style.learnMoreTitle}>{t('sections.welcome.learnMoreTitle')}</div>
          <div className={style.buttonBlock}>
            <ButtonLink href={`${process.env.MAIN_SITE_BASE_PATH}/${lng}#donate`}>
              {t('sections.welcome.buttons.support')}
            </ButtonLink>
            <ButtonLink href={`${process.env.MAIN_SITE_BASE_PATH}/${lng}`}>
              {t('sections.welcome.buttons.learnMore')}
            </ButtonLink>
          </div>
        </div>
        <div className={style.imageWrapper}>
          <Image src={LogoText} alt="logo" className={style.img} />
        </div>
      </ContentWrapper>
    </section>
  );
};

Welcome.id = 'welcome';

export default Welcome;
