import style from './styles.module.scss';
import options from './options';
import Link from 'next/link';
import {getTranslation} from '@/i18n';
import {FC} from 'react';
import LngInterface from '@/LngInterface';

const Navigation: FC<LngInterface> = async ({lng}) => {
  const {t} = await getTranslation(lng);
  if (!options) {
    return null;
  }

  const linksJsx = options.map(option => (
    <Link key={`header-nav-${option.link}`} href={option.link} className="with-animated-underline">
      {
        // @ts-ignore
        t(option.i18nKey)
      }
    </Link>
  ));
  return (
    <nav className={style.container}>
      <div className={style.navLinks}>{linksJsx}</div>
    </nav>
  );
};

export default Navigation;
