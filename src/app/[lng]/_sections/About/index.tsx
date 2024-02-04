import PreviewSection from '@/components/PreviewSection';
import SideImg from './about_us.webp';
import {getTranslation} from '@/i18n';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const About: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  return (
    <PreviewSection
      id={About.id}
      title={t('sections.about.title')}
      text={t('sections.about.paragraphs', {returnObjects: true}).map((pText, index) => (
        <p key={`paragraph-${index}`}>{pText}</p>
      ))}
      imageSrc={SideImg}
      reverseLayoutDirection
    />
  );
};

About.id = 'about';

export default About;
