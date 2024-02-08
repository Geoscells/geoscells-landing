import Image, {StaticImageData} from 'next/image';
import style from './styles.module.scss';
import ButtonLink from '../ButtonLink';
import {FC} from 'react';

interface CollabOptionItemProps {
  title: string;
  imgSrc: string | StaticImageData;
  text: string;
  button: {
    title: string;
    href: string;
  };
}

const CollabOptionItem: FC<CollabOptionItemProps> = ({title, imgSrc, text, button: {title: btnTitle, href}}) => (
  <div className={style.container}>
    <Image src={imgSrc} alt={title} className={style.preview} />
    <div className={style.bottom}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.text}>{text}</p>
      <div className={style.buttonWrapper}>
        <ButtonLink href={href} className={style.button}>
          {btnTitle}
        </ButtonLink>
      </div>
    </div>
  </div>
);

export default CollabOptionItem;
