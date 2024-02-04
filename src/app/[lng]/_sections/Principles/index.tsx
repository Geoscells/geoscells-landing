import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import Img1 from './img/ai_art_1.jpg';
import Img2 from './img/ai_art_2.jpg';
import Img3 from './img/ai_art_3.jpg';
import Img4 from './img/ai_art_4.jpg';
import Img5 from './img/ai_art_5.jpg';
import Img6 from './img/ai_art_9.jpg';
import ContentWrapper from '@/components/ContentWrapper';
import PrincipleItem from '@/components/PrincipleItem';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const Principles: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  const membersJsx = t('sections.principles.items', {returnObjects: true}).map(({title, text}, index) => (
    <PrincipleItem key={`principle-${index}`} title={title} text={text} imgSrc={images[index]} />
  ));

  return (
    <div id={Principles.id} className={style.container}>
      <ContentWrapper className={style.titleWrapper}>
        <h1 className={style.title}>{t('sections.principles.title')}</h1>
      </ContentWrapper>
      <ContentWrapper className={style.content}>{membersJsx}</ContentWrapper>
    </div>
  );
};

Principles.id = 'principles';

export default Principles;
