import Link from 'next/link';
import style from './styles.module.scss';
import classnames from 'classnames';
import {FC} from 'react';

interface ButtonLinkProps {
  href?: string;
  children?: any;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const ButtonLink: FC<ButtonLinkProps> = ({className, size = 'md', href, ...otherProps}) => {
  const buttonClassName = classnames(style.buttonLink, style[`${size}Size`], className);
  if (href) {
    return <Link {...otherProps} href={href} className={buttonClassName} />;
  } else {
    return <button {...otherProps} className={buttonClassName} />;
  }
};

export default ButtonLink;
