import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import Img from './img/pic.webp';
import ContentWrapper from '@/components/ContentWrapper';
import PrincipleItem from '@/components/PrincipleItem';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const Principles: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  const membersJsx = t('sections.principles.items', {returnObjects: true}).map(({title, text}, index) => (
    <PrincipleItem key={`principle-${index}`} title={title} text={text} imgSrc={Img} />
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
