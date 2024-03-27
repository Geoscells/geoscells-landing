import logo from './logo.svg';
import style from './styles.module.scss';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import React, {FC, MouseEventHandler} from 'react';

interface LogoProps {
  altText?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  lng: string;
}

const Logo: FC<LogoProps> = ({altText = 'Geoscell Logo', className, onClick, lng}) => (
  <Link href={`/${lng}`} className={classnames(style.logo, className)} onClick={onClick}>
    <Image src={logo} alt={altText} className={style.img} />
  </Link>
);

export default Logo;
