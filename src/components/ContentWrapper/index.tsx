import style from './styles.module.scss';
import classnames from 'classnames';
import {FC, HTMLProps, PropsWithChildren} from 'react';

interface ContentWrapperProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  as?: keyof HTMLElementTagNameMap;
}

const ContentWrapper: FC<ContentWrapperProps> = ({id, className, children, as = 'div'}) => {
  const Tag = as;
  return (
    <Tag id={id} className={classnames(style.contentWrapper, className)}>
      {children}
    </Tag>
  );
};

export default ContentWrapper;
