import {getTranslation} from '@/i18n';
import style from './styles.module.scss';
import TeamMember from '@/components/TeamMember';
import Avatar1Member from './img/1.webp';
import Avatar2Member from './img/2.webp';
import Avatar3Member from './img/3.webp';
import ContentWrapper from '@/components/ContentWrapper';
import ButtonLink from '@/components/ButtonLink';
import {SectionCommonType} from '@/app/[lng]/_sections/SectionCommonType';

const Team: SectionCommonType = async ({lng}) => {
  const {t} = await getTranslation(lng);

  const avatars = [Avatar1Member, Avatar2Member, Avatar3Member];

  const membersJsx = t('sections.team.members', {returnObjects: true}).map(({name, position, keyFacts}, index) => (
    <TeamMember
      key={`team-member-${index}`}
      name={name}
      position={position}
      imgSrc={avatars[index]}
      keyFacts={keyFacts}
    />
  ));

  return (
    <section id={Team.id} className={style.container}>
      <div className={style.titleWrapper}>
        <h1 className={style.title}>{t('sections.team.title')}</h1>
      </div>
      <ContentWrapper className={style.content}>{membersJsx}</ContentWrapper>
      <div className={style.buttonWrapper}>
        <ButtonLink href={`/${lng}#contact-info`}>{t('sections.team.contactUsButton')}</ButtonLink>
      </div>
    </section>
  );
};

Team.id = 'team';

export default Team;
