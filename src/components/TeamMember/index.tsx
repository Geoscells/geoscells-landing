import Image, {StaticImageData} from 'next/image';
import style from './styles.module.scss';
import {FC} from 'react';

interface TeamMemberProps {
  imgSrc: string | StaticImageData;
  name: string;
  position: string;
  keyFacts: string[];
}

const TeamMember: FC<TeamMemberProps> = ({imgSrc, name, position, keyFacts}) => {
  const keyFactListJsx = keyFacts.map((keyFact, index, arr) => {
    const lineSuffix = index === arr.length - 1 ? '.' : ';';
    return (
      <li key={index} className={style.li}>
        {keyFact}
        {lineSuffix}
      </li>
    );
  });

  return (
    <div className={style.container}>
      <Image src={imgSrc} alt={name} className={style.avatar} />
      <div className={style.mainInfo}>
        <div>{name}</div>
        <div className={style.secondLine}>{position}</div>
      </div>
      <div className={style.keyFactsWrapper}>
        <ul className={style.ul}>{keyFactListJsx}</ul>
      </div>
    </div>
  );
};

export default TeamMember;
