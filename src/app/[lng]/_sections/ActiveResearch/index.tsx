import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import ContentWrapper from '@/components/ContentWrapper';
import ButtonLink from '@/components/ButtonLink';
import ActiveResearchItem from '@/components/ActiveResearchItem';
import Img1 from './img/cell1.webp';
import Img2 from './img/cell2.webp';
import Img3 from './img/cell3.webp';
import Img4 from './img/cell4.webp';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const ActiveResearch: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  const imageThumbs = [Img1, Img2, Img3, Img4];

  const researchItemsJsx = t('sections.activeResearch.items', {returnObjects: true}).map((text, index) => (
    <ActiveResearchItem key={`active-research-${index}`} index={index + 1} text={text} imgSrc={imageThumbs[index]} />
  ));

  return (
    <section id={ActiveResearch.id} className={style.container}>
      <ContentWrapper className={style.titleWrapper}>
        <h1 className={style.title}>{t('sections.activeResearch.title')}</h1>
      </ContentWrapper>
      <ContentWrapper>
        <h3 className={style.subTitle}>{t('sections.activeResearch.subTitle')}</h3>
      </ContentWrapper>
      <ContentWrapper className={style.content}>{researchItemsJsx}</ContentWrapper>
      <div className={style.buttonWrapper}>
        <ButtonLink href={`${process.env.MAIN_SITE_BASE_PATH}/${lng}`}>
          {t('sections.activeResearch.learnMoreBtn')}
        </ButtonLink>
      </div>
    </section>
  );
};

ActiveResearch.id = 'active-research';

export default ActiveResearch;
