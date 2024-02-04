import style from './styles.module.scss';
import Image, {StaticImageData} from 'next/image';
import {FC} from 'react';

interface ActiveResearchItemProps {
  index: number;
  imgSrc: string | StaticImageData;
  text: string;
}

const ActiveResearchItem: FC<ActiveResearchItemProps> = ({index, imgSrc, text}) => {
  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <Image src={imgSrc} alt={`Active research item ${index + 1}`} className={style.image} />
        <div className={style.index}>{index}.</div>
      </div>
      <div className={style.textWrapper}>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};

export default ActiveResearchItem;
