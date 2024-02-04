'use client';

import style from './styles.module.scss';
import Image from 'next/image';
import UpArrow from './upArrow.svg';
// @ts-ignore
import {useScrollPercentage} from 'react-scroll-percentage';
import classNames from 'classnames';
import {FC, PropsWithChildren, KeyboardEvent} from 'react';

const BackToTopButton: FC<PropsWithChildren> = ({children}) => {
  const [ref, percentage] = useScrollPercentage();

  const buttonClassName = classNames(style.button, {
    [style.toTopButtonVisible]: percentage > 0.3
  });

  const onClickHandler = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (['Enter', 'Space'].includes(e.key)) {
      onClickHandler();
    }
  };

  return (
    <div className={style.container} ref={ref}>
      {children}
      <button className={buttonClassName} onClick={onClickHandler} onKeyDown={onKeyDownHandler}>
        <Image src={UpArrow} alt={'Up Arrow'} className={style.upArrow} />
      </button>
    </div>
  );
};

export default BackToTopButton;
