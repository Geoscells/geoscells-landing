import style from './styles.module.scss';
import options from './options';
import Link from 'next/link';
import {getTranslation} from '@/i18n';
import LngInterface from '@/LngInterface';
import {FC} from 'react';

const Navigation: FC<LngInterface> = async ({lng}) => {
  const {t} = await getTranslation(lng);
  if (!options) {
    return null;
  }

  const linksJsx = options.map(({i18nKey, link}) => (
    <div key={`nav-${link}`}>
      <Link href={link} className="with-animated-underline">
        {
          // @ts-ignore
          t(i18nKey)
        }
      </Link>
    </div>
  ));
  return <nav className={style.container}>{linksJsx}</nav>;
};

export default Navigation;
