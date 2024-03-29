import PreviewSection from '@/components/PreviewSection';
import SideImg6 from './img/ai_art_6.webp';
import SideImg7 from './img/ai_art_7.webp';
import SideImg8 from './img/ai_art_8.webp';
import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';
import Team from '@/app/[lng]/_sections/Team';

const WeDo: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  return (
    <>
      <PreviewSection
        id={WeDo.id}
        title={t('sections.weDo.title')}
        text={
          <>
            <h3 className={style.subTitle}>{t('sections.weDo.subTitle')}</h3>
            <p>{t('sections.weDo.text')}</p>
          </>
        }
        button={{title: t('sections.weDo.supportButton'), href: t('sections.weDo.supportButtonUrl')}}
        imageSrc={SideImg6}
        reverseLayoutDirection
      />

      <PreviewSection
        title={''}
        text={
          <>
            <h3 className={style.subTitle}>{t('sections.weDo.subSections.subSec1.title')}</h3>
            <p>{t('sections.weDo.subSections.subSec1.text')}</p>
          </>
        }
        button={{
          title: t('sections.weDo.subSections.subSec1.btnTitle'),
          href: t('sections.weDo.subSections.subSec1.btnTitleUrl')
        }}
        imageSrc={SideImg7}
      />

      <PreviewSection
        title={''}
        text={
          <>
            <h3 className={style.subTitle}>{t('sections.weDo.subSections.subSec2.title')}</h3>
            <p>{t('sections.weDo.subSections.subSec2.text')}</p>
          </>
        }
        button={{
          title: t('sections.weDo.subSections.subSec2.btnTitle'),
          href: `/${lng}#${Team.id}`
        }}
        imageSrc={SideImg8}
        reverseLayoutDirection
      />
    </>
  );
};

WeDo.id = 'we-do';

export default WeDo;
