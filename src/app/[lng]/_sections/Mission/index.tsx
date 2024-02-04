import PreviewSection from '@/components/PreviewSection';
import SideImg from './about_us.webp';
import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const Mission: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  return (
    <PreviewSection
      id={Mission.id}
      title={t('sections.mission.title')}
      text={t('sections.mission.paragraphs', {returnObjects: true}).map((p, index) => (
        <p key={`paragraph-${index}`}>
          <span className={style.bold}>{p.boldPrefix}</span>
          {p.text}
        </p>
      ))}
      button={{title: t('sections.mission.title'), href: `${process.env.MAIN_SITE_BASE_PATH}/${lng}`}}
      imageSrc={SideImg}
      reverseLayoutDirection
    />
  );
};

Mission.id = 'mission';

export default Mission;
