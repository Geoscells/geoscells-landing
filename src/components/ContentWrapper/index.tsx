import style from './styles.module.scss';
import classnames from 'classnames';
import {FC, HTMLProps, PropsWithChildren} from 'react';

interface ContentWrapperProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {}

const ContentWrapper: FC<ContentWrapperProps> = ({id, className, children, ...otherProps}) => (
  <div className={classnames(style.contentWrapper, className)} {...otherProps}>
    {children}
  </div>
);

export default ContentWrapper;
