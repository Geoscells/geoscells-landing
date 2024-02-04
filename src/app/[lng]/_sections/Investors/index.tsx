import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import Img from './img/pic.webp';
import ContentWrapper from '@/components/ContentWrapper';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';
import CollabOptionItem from '@/components/CollabOptionItem';

const Investors: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  const imgAndButton = [
    {
      imgSrc: Img,
      btnLink: `${process.env.MAIN_SITE_BASE_PATH}/${lng}/contact-us`
    },
    {
      imgSrc: Img,
      btnLink: `${process.env.MAIN_SITE_BASE_PATH}/${lng}/contact-us`
    },
    {
      imgSrc: Img,
      btnLink: `${process.env.MAIN_SITE_BASE_PATH}/${lng}/contact-us`
    }
  ];

  const colabOptionsJsx = t('sections.investors.items', {returnObjects: true}).map(({title, text, btnTitle}, index) => (
    <CollabOptionItem
      key={`principle-${index}`}
      title={title}
      text={text}
      imgSrc={imgAndButton[index].imgSrc}
      button={{title: btnTitle, href: imgAndButton[index].btnLink}}
    />
  ));

  return (
    <div className={style.container}>
      <ContentWrapper className={style.titleWrapper}>
        <h1 className={style.title}>{t('sections.investors.title')}</h1>
      </ContentWrapper>
      <ContentWrapper>
        <h3 className={style.subTitle}>{t('sections.investors.subTitle')}</h3>
      </ContentWrapper>
      <ContentWrapper className={style.content}>{colabOptionsJsx}</ContentWrapper>
    </div>
  );
};

Investors.id = 'investors';

export default Investors;
