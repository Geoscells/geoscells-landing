import Image, {StaticImageData} from 'next/image';
import style from './styles.module.scss';
import {FC} from 'react';

interface PrincipleItemProps {
  title: string;
  imgSrc: string | StaticImageData;
  text: string;
}

const PrincipleItem: FC<PrincipleItemProps> = ({title, imgSrc, text}) => (
  <div className={style.container}>
    <Image src={imgSrc} alt={title} className={style.preview} />
    <div className={style.bottom}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{text}</p>
    </div>
  </div>
);

export default PrincipleItem;
