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
}

const Logo: FC<LogoProps> = ({altText = 'Geoscell Logo', className, onClick}) => (
  <Link href={process.env.MAIN_SITE_BASE_PATH ?? '/'} className={classnames(style.logo, className)} onClick={onClick}>
    <Image src={logo} alt={altText} className={style.img} />
  </Link>
);

export default Logo;
