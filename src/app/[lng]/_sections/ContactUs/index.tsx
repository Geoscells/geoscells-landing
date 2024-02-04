import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import ContentWrapper from '@/components/ContentWrapper';
import CellImg from './cell.webp';
import ButtonLink from '@/components/ButtonLink';
import Image from 'next/image';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const ContactUs: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  return (
    <ContentWrapper id={ContactUs.id}>
      <div className={style.container}>
        <Image src={CellImg} alt={'Cell'} className={style.cell} />
        <div className={style.text}>{t('sections.contactUs.text')}</div>
        <div className={style.buttonWrapper}>
          <ButtonLink href={`${process.env.MAIN_SITE_BASE_PATH}/${lng}/contact-us`}>
            {t('sections.contactUs.buttonTitle')}
          </ButtonLink>
        </div>
      </div>
    </ContentWrapper>
  );
};

ContactUs.id = 'contact-us';

export default ContactUs;
