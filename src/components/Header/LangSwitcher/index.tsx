import {FC} from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import {supportedLangSlugs} from '@/i18n/settings';
import classNames from 'classnames';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
  const linksJsx = supportedLangSlugs.map(lang => (
    <Link key={lang} href={`/${lang}`} className="with-animated-underline">
      {lang.toUpperCase()}
    </Link>
  ));

  return <div className={classNames(style.container, className)}>{linksJsx}</div>;
};

export default LangSwitcher;
