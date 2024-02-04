import Link from 'next/link';
import style from './styles.module.scss';
import classnames from 'classnames';
import {FC} from 'react';

interface ButtonLinkProps {
  href: string;
  children?: any;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const ButtonLink: FC<ButtonLinkProps> = ({className, size = 'md', ...otherProps}) => {
  const buttonClassName = classnames(style.buttonLink, style[`${size}Size`], className);
  return <Link {...otherProps} className={buttonClassName} />;
};

export default ButtonLink;
