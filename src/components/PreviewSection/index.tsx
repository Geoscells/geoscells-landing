import style from './styles.module.scss';
import classnames from 'classnames';
import ButtonLink from '@/components/ButtonLink';
import Image, {StaticImageData} from 'next/image';
import {FC, ReactElement} from 'react';

interface PreviewSectionProps {
  id?: string;
  title?: string;
  text: string | ReactElement | ReactElement[];
  button?: {
    title: string;
    href: string;
  };
  imageSrc: string | StaticImageData;
  reverseLayoutDirection?: boolean;
}

const PreviewSection: FC<PreviewSectionProps> = ({id, title, text, button, imageSrc, reverseLayoutDirection}) => {
  const titleWrapperJsx = title ? (
    <div className={style.titleWrapper}>
      <h1 className={style.title}>{title}</h1>
    </div>
  ) : null;

  const buttonWrapperJsx = button ? (
    <div className={style.buttonWrapper}>
      <ButtonLink href={button.href}>{button.title}</ButtonLink>
    </div>
  ) : null;

  const textJsx = typeof text === 'string' ? <p className={style.text}>{text}</p> : text;

  return (
    <section
      id={id}
      className={classnames(style.container, {
        [style.reversedLayout]: reverseLayoutDirection
      })}>
      {titleWrapperJsx}
      <div className={style.imageWrapper}>
        <Image src={imageSrc} alt={title || 'Section preview'} className={style.image} />
      </div>
      <div className={style.textWrapper}>{textJsx}</div>
      {buttonWrapperJsx}
    </section>
  );
};

export default PreviewSection;
